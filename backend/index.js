import express from "express";
const app = express();
const PORT = 3002;
import postRoute from "./routes/postRoute.js";
import contactRoute from "./routes/contactRoute.js";
import userRoute from "./routes/userRoute.js";
import commentRoute from "./routes/commentRoute.js";
import dbConnection from "./config/dbconnection.js";
import cors from "cors";
import bodyParser from "body-parser";

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/home", postRoute);
app.use("/user", userRoute);
app.use("/contact", contactRoute);
app.use("/comment",commentRoute);

app.listen(PORT, () => {
  console.log("App is listening on port ", PORT);
});

dbConnection();
