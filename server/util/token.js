const jwt = require("jsonwebtoken");

const generateToken = (data) => {
  const token = jwt.sign(data, process.env.TOKEN_SECRET, {
    expiresIn: process.env.TOKEN_LIFE,
  });
  const refreshToken = jwt.sign(data, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: process.env.REFRESH_TOKEN_LIFE,
  });

  const payload = {
    token,
    refreshToken,
  };

  return data;
};

module.exports = generateToken;
