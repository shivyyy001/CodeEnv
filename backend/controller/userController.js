import Userinfo from "../schemas/usersSchema.js";
import { validationResult } from "express-validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const JWT_SECRET = "CodeEnvJWT";

export const createUser = async (request, response) => {
  // validating username and password using express validator.
  const errors = validationResult(request);
  if (!errors.isEmpty()) {
    return response.status(400).json({ errors: errors.array() });
  }

  // checking if the username already exists.
  try {
    let user = await Userinfo.findOne({ username: request.body.username });
    if (user) {
      return response
        .status(400)
        .json({ errors: [{ msg: "Username already exists" }] });
    }
    const salt = await bcrypt.genSalt(10);
    const securedPass = await bcrypt.hash(request.body.password, salt);

    user = new Userinfo(request.body);

    // setting the user's password to secured password generated using bcryptjs
    user.password = securedPass;

    await user.save();

    const data = {
      user: {
        id: user.id,
      },
    };

    // signing the authentication token to send to user.
    const authtoken = jwt.sign(data, JWT_SECRET, { expiresIn: "1h" });

    response.status(200).json({ authtoken });
  } catch (error) {
    response.status(500).json(error);
  }
};

export const loginUser = async (request, response) => {
  // validating username and password using express validator.
  const errors = validationResult(request);
  if (!errors.isEmpty()) {
    return response.status(400).json({ errors: errors.array() });
  }

  const { username, password } = request.body;

  try {
    let user = await Userinfo.findOne({ username });
    if (!user) {
      return response
        .status(400)
        .json({ errors: [{ msg: "Enter correct credentials" }] });
    }

    // comparing the passwords
    const passwordCompare = await bcrypt.compare(password, user.password);

    if (!passwordCompare) {
      return response
        .status(400)
        .json({ errors: [{ msg: "Enter correct credentials" }] });
    }

    const data = {
      user: {
        id: user.id,
      },
    };

    // signing the authentication token to send to user.
    const authtoken = jwt.sign(data, JWT_SECRET, { expiresIn: "1h" });

    response.status(200).json({ authtoken });
  } catch (error) {
    response.status(500).json(error);
  }
};

export const getUser = async (request, response) => {
  try {
    const userid = request.user.id;
    const user = await Userinfo.findById(userid).select("-password");
    response.status(200).json(user);
  } catch (error) {
    response.status(500).json(error);
  }
};
