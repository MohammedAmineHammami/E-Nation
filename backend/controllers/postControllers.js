import db from "../database/db.js";
import moment from "moment";

export const getUserPosts = async (req, res) => {
  const { id } = req.currentUser;

  const q = `SELECT p.* , u.user_id , u.username , u.user_cover_img, u.user_profile_img FROM users AS u JOIN posts AS p ON (p.foreign_user_id=u.user_id) WHERE u.user_id=?
   ORDER BY p.created_at DESC `;
  db.query(q, id, (err, data) => {
    if (err) return res.status(500).json(err);
    res.status(200).json(data);
    return data;
  });
};

export const getPosts = async (req, res) => {
  const { id } = req.currentUser;
  const q = `SELECT p.*, u.user_id, u.username, u.user_profile_img, u.user_cover_img 
    FROM users AS u 
    JOIN posts AS p ON (p.foreign_user_id = u.user_id) 
    LEFT JOIN friendships AS f ON (p.foreign_user_id = f.followers_id) 
     WHERE u.user_id = ? OR f.followed_id = ?
    ORDER BY p.created_at DESC; `;
  db.query(q, [id, id], (err, data) => {
    if (err) return res.status(500).json(err);
    res.status(200).json(data);
  });
};

export const deletePost = async (req, res) => {
  const { id } = req.currentUser;
  const q = "DELETE FROM posts WHERE foreign_user_id=? AND post_id=?";
  db.query(q, [id, req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.affectedRows > 0) {
      return res.status(200).json("Post deleted with successfully!");
    } else {
      res
        .status(403)
        .json("This post doesn't belongs to you, you can not delete it!");
    }
  });
};

export const createPost = async (req, res) => {
  const { id } = req.currentUser;
  const q =
    "INSERT INTO posts (`post_title`,`post_img`,`created_at` ,`foreign_user_id`) VALUES(?)";
  const values = [
    req.body.title,
    req.body.img,
    moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
    id,
  ];
  db.query(q, [values], (err, resul) => {
    if (err) return res.status(500).json(err);

    res.status(201).json("Post added with successfully!");
  });
};
