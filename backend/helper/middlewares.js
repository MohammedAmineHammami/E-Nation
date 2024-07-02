import Jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
  const token = req.cookies.access_token;

  if (!token) {
    return res.status(400).json("Token not exist..!");
  }
  Jwt.verify(token, "secretKey", (err, decoded) => {
    if (err) {
      return res.status(401).json("Invalid token..!");
    }
    req.currentUser = decoded;
    next();
  });
};
