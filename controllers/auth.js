const { default: axios } = require("axios");
const oauth2Client = require("../helpers/googleAuth");
const db = require("../helpers/firebase");
require("dotenv").config();
const {
  collection,
  query,
  where,
  getDocs,
  doc,
  addDoc,
} = require("firebase/firestore");
const jwt = require("jsonwebtoken");

const googleRedirect = (req, res) => {
  const SCOPES = [
    "https://www.googleapis.com/auth/drive.readonly",
    "https://www.googleapis.com/auth/drive.metadata.readonly",
    "https://www.googleapis.com/auth/drive",
  ];
  const authUrl = oauth2Client().generateAuthUrl({
    access_type: "offline",
    scope: ["email", ...SCOPES],
  });
  res.redirect(authUrl);
};

const googleCallback = async (req, res) => {
  const { code } = req.query;
  const { tokens } = await oauth2Client().getToken(code);
  oauth2Client().setCredentials(tokens);
  const { data } = await axios.get(
    "https://www.googleapis.com/oauth2/v2/userinfo",
    {
      headers: {
        Authorization: `Bearer ${tokens.access_token}`,
      },
    }
  );
  let userId;
  const collectionRef = collection(db(), "users");
  const q = query(collectionRef, where("email", "==", data?.email));
  const querySnapshot = await getDocs(q);
  if (querySnapshot.empty) {
    const ref = await addDoc(collectionRef, {
      email: data?.email,
      access_token: tokens.access_token,
    });
    userId = ref.id;
  } else {
    querySnapshot.forEach((doc) => {
      userId = doc.id;
    });
  }
  const appKey = process.env.APP_KEY;
  const token = jwt.sign({ sub: userId }, appKey, {
    expiresIn: "3d",
  });
  const frontendUrl = process.env.FRONTEND_BASE_URL;
  res.redirect(frontendUrl + "?t=" + token);
};

module.exports = { googleRedirect, googleCallback };
