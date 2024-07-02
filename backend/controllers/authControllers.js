import db from "../database/db.js";
import bcrypt from "bcrypt";
import Jwt from "jsonwebtoken";

export const register = async (req, res) => {
  const { username, email, password } = req.body;
  const q1 = "SELECT * FROM users WHERE username=? OR email=?";

  db.query(q1, [username, email], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length) return res.status(409).json("User already exist!");

    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password, salt);
    const q2 =
      "INSERT INTO users (`username`,`email`,`password`) VALUES(?,?,?)";
    db.query(q2, [username, email, hashPassword], (err) => {
      if (err) return res.status(500).json(err);
      res.status(201).json("Registration done with successfully!");
    });
  });
};

export const logIn = async (req, res) => {
  const { username } = req.body;
  const q1 = "SELECT * FROM users WHERE username=?";
  db.query(q1, [username], (err, data) => {
    if (err) return res.status(500).json(err);
    if (!data[0]) return res.status(404).json("User not found!");
    const isCorrect = bcrypt.compareSync(req.body.password, data[0].password);
    if (!isCorrect) return res.status(400).json("Invalid email or password!");
    const token = Jwt.sign({ id: data[0].user_id }, "secretKey");
    const { password, ...others } = data[0];
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(others);
  });
};

export const logOut = async (req, res) => {
  res
    .clearCookie("access_token", {
      secure: true,
      sameSite: "none",
    })
    .status(200)
    .json("you logOut");
};
