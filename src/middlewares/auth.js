const jwt = require("jsonwebtoken");
const { configDotenv } = require("dotenv");

configDotenv();

const isAuthorized = (req, res, next) => {
  try {
    const token = req.headers["authorization"];
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = verified;
    next();

  } catch (error) {
    return res.status(403).json({ message: "Forbidden: Invalid token" });
  }
};

module.exports = isAuthorized;