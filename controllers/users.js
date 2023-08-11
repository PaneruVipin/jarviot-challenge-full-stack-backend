const getFiles = async (req, res) => {
  const user = req.loggedInUser;
  res.json(user);
};
module.exports = { getFiles };
