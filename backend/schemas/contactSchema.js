import mongoose from "mongoose";
import validator from "validator";

const ContactSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator: validator.isEmail,
      message: "Not a valid email",
      isAsync: false,
    },
  },
  message: {
    type: String,
    required: true,
  },
});

const contact = mongoose.model("Contact_info", ContactSchema);

export default contact;
