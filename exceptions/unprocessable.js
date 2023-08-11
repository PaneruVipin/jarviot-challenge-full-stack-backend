const unprocessable = (res, message) => {
  res.status(402).json({
    errors: [{ message }],
  });
};

module.exports = unprocessable;
