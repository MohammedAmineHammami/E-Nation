import express from "express";
import bodyParser from "body-parser";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import cors from "cors";
import db from "./database/db.js";
import authRouter from "./routes/authRoutes.js";
import postRouter from "./routes/postRoutes.js";

const app = express();

/* app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true);
  next();
});
 */
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3001",
    //server will accept the credentials in req
    credentials: true,
  })
);

app.use("/api/auth", authRouter);
app.use("/api/posts", postRouter);

app.listen(3000, () => {
  console.log("Server is running at port: 3000");
});
