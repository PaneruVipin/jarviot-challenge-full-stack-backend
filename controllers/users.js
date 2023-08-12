const { default: axios } = require("axios");
const unauthenticated = require("../exceptions/unauthenticated");
const driveApiBaseUrl = "https://www.googleapis.com/drive/v3";
const getFiles = async (req, res) => {
  try {
    const user = req.loggedInUser;
    const page = req.headers?.page;
    const { data } = await axios.get(driveApiBaseUrl + "/files", {
      headers: {
        Authorization: `Bearer ${user?.access_token}`,
      },
      params: {
        pageSize: 1000,
        pageToken: page,
        fields:
          "files(id,name,mimeType,size,webViewLink,trashed),nextPageToken",
      },
    });
    res.json(data);
  } catch (e) {
    unauthenticated(res, "session expired, authenticate again");
  }
};

const getDriveInfo = async (req, res) => {
  try {
    const user = req.loggedInUser;
    const { data } = await axios.get(driveApiBaseUrl + "/about", {
      headers: {
        Authorization: `Bearer ${user?.access_token}`,
      },
      params: {
        fields: "storageQuota,user",
      },
    });
    res.json(data);
  } catch (e) {
    unauthenticated(res, "session expired, authenticate again");
  }
};
module.exports = { getFiles, getDriveInfo };
