import express from "express";
import { logIn, logOut, register } from "../controllers/authControllers.js";

const authRouter = express.Router();

authRouter.post("/login", logIn);
authRouter.post("/register", register);
authRouter.post("/logout", logOut);

export default authRouter;
