import Contactinfo from "../schemas/contactSchema.js";

const createContact = async(request, response) => {
  try {
    const finalContact = new Contactinfo(request.body);
    await finalContact.save();
    response.status(200).json("Contact details saved successfully");
  } catch (error) {
    response.status(500).json(error);
  }
};

export default createContact;
