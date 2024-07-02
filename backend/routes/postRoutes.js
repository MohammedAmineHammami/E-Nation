import express from "express";
import { authMiddleware } from "../helper/middlewares.js";
import {
  getUserPosts,
  getPosts,
  deletePost,
  createPost,
} from "../controllers/postControllers.js";

const postRouter = express.Router();

postRouter.get("/:currentUser/all", authMiddleware, getUserPosts);
postRouter.get("/all", authMiddleware, getPosts);
postRouter.delete("/delete/:id", authMiddleware, deletePost);
postRouter.post("/add", authMiddleware, createPost);

export default postRouter;
