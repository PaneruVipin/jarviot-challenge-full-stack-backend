const { google } = require("googleapis");
const oauth2Client = require("../helpers/googleAuth");
const { GoogleAuth } = require("google-auth-library");
const getFiles = async (req, res) => {
  const callbackURL = `${req.protocol}://${req.get("host")}/google/callback`;
  const auth = new GoogleAuth({
    scopes: "https://www.googleapis.com/auth/drive",
  });
  const service = google.drive({ version: "v3", auth });
  const files = await service.drives.list();
  res.json(files);
};
module.exports = { getFiles };
