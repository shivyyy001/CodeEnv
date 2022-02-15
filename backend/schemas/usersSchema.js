import mongoose from "mongoose";

const UsersSchema = mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const users = mongoose.model("Users_info", UsersSchema);
export default users;
