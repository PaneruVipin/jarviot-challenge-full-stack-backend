require("dotenv").config();
const { google } = require("googleapis");
const oauth2Client = () => {
  const REDIRECT_URI = process.env.BACKEND_BASE_URL + "/google/callback";
  const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
  const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
  return new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
};

module.exports = oauth2Client;
