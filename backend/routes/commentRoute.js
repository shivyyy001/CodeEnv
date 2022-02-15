import express from "express";
const router = express.Router();
import { fetchuser } from "../middlewares/fetchUser.js";
import {
  newComment,
  getComments,
  deleteComment,
} from "../controller/commentsController.js";

router.post("/post", fetchuser, newComment);
router.get("/get/:id", getComments);
router.delete("/delete/:id", fetchuser, deleteComment);

export default router;
