const unauthenticated = (res, message) => {
  res.status(401).json({
    errors: [{ message }],
  });
};

module.exports = unauthenticated;
