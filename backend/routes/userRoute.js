import express from "express";
import {
  createUser,
  loginUser,
  getUser,
} from "./../controller/userController.js";
import { body } from "express-validator";
import { fetchuser } from "../middlewares/fetchUser.js";

const router = express.Router();

router.post(
  "/create",
  [
    body("username", "Enter a valid username").isLength({ min: 3 }),
    body("password", "Enter a valid password").isLength({ min: 5 }),
  ],
  createUser
);

router.post(
  "/login",
  [
    body("username", "Enter a valid username").isLength({ min: 3 }),
    body("password", "Password cannot be blank").isLength({ min: 1 }),
  ],
  loginUser
);

router.post("/getuser", fetchuser, getUser);

export default router;
