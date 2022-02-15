import grid from "gridfs-stream";
import mongoose from "mongoose";

const url = "http://localhost:3002";

const conn = mongoose.connection;
let gfs;

conn.once("open", () => {
  gfs = grid(conn.db, mongoose.mongo);
  gfs.collection("fs");
});

export const uploadImage = (request, response) => {
  try {
    // console.log("file",request.file);
    // console.log("body",request.body);
    if (!request.file) {
      return response.status(404).json("File not found");
    }
    const imageURL = `http://localhost:3002/home/file/${request.file.filename}`;
    response.status(200).json(imageURL);
  } catch (error) {
    response.status(500).json(error);
  }
};

export const getImage = async (request, response) => {
  try {
    const file = await gfs.files.findOne({ filename: request.params.filename });
    const readStream = await gfs.createReadStream(file.filename);
    readStream.pipe(response);
  } catch (error) {
    response.status(500).json(error);
  }
};
