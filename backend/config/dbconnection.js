import mongoose from "mongoose";

const dbConnection = async () => {
  const URL =
    "mongodb+srv://shivansh:mongo123@codeenv.4fyf5.mongodb.net/CODEENVBLOG?retryWrites=true&w=majority";
  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useFindAndModify:true
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting to the database ", error);
  }
};

export default dbConnection;
