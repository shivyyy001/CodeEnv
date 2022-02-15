import express from "express";
import createContact from "../controller/contactController.js";
import { fetchuser } from "../middlewares/fetchUser.js";

const router = express.Router();

router.post("/info", fetchuser, createContact);

export default router;
