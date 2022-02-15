import express from "express";
import {
  createPost,
  getAllPosts,
  getPost,
  updatePost,
  deletePost,
} from "../controller/postController.js";
import { uploadImage, getImage } from "../controller/imageController.js";
import upload from "../utils/upload.js";
import { fetchuser } from "../middlewares/fetchUser.js";

const router = express.Router();

router.get("/posts", getAllPosts);
router.post("/create", fetchuser, createPost);
router.get("/post/:id", getPost);
router.post("/edit/:id", fetchuser, updatePost);
router.delete("/delete/:id", fetchuser, deletePost);
router.post("/file/upload", fetchuser, upload.single("file"), uploadImage);
router.get("/file/:filename", getImage);
export default router;
