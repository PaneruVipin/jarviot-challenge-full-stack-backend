var { doc, getDoc } = require("firebase/firestore");
const unauthenticated = require("../exceptions/unauthenticated");
const jwt = require("jsonwebtoken");
const db = require("../helpers/firebase");
const unprocessable = require("../exceptions/unprocessable");

require("dotenv").config();
const auth = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    unauthenticated(res, "no token found");
  } else {
    try {
      const data = jwt.verify(token, process.env.APP_KEY);
      const docRef = doc(db(), "users", data.sub);
      const docSnap = await getDoc(docRef);
      if (!docSnap.data()) {
        unprocessable(res, "doc not exist");
      } else {
        req.loggedInUser = { ...docSnap.data(), id: docSnap.id };
        await next();
      }
    } catch (e) {
      if (e.message === "jwt expired")
        unauthenticated(res, "this token is expired");
      else unauthenticated(res, "token are not valid");
    }
  }
};
module.exports = auth;
