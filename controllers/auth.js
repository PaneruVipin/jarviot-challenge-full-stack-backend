const oauth2Client = require("../helpers/googleAuth");

const googleRedirect = (req, res) => {
  const callbackURL = `${req.protocol}://${req.get("host")}/google/callback`;
  const SCOPES = [
    "https://www.googleapis.com/auth/drive.readonly",
    "https://www.googleapis.com/auth/drive.metadata.readonly",
    "https://www.googleapis.com/auth/drive",
  ];
  const authUrl = oauth2Client(callbackURL).generateAuthUrl({
    access_type: "offline",
    scope: ["email", ...SCOPES],
  });
  res.redirect(authUrl);
};

const googleCallback = async (req, res) => {
  const callbackURL = `${req.protocol}://${req.get("host")}/google/callback`;
  const { code } = req.query;
  const { tokens } = await oauth2Client(callbackURL).getToken(code);
  oauth2Client(callbackURL).setCredentials(tokens);

  res.json({ tokens });
};


module.exports = { googleRedirect, googleCallback };
