import multer from "multer";
import { GridFsStorage } from "multer-gridfs-storage";

const storage = new GridFsStorage({
  url: "mongodb+srv://shivansh:mongo123@codeenv.4fyf5.mongodb.net/CODEENVBLOG?retryWrites=true&w=majority",
  options: { useNewUrlParser: true, useUnifiedTopology: true },
  file: (request, file) => {
    console.log("file from upload" , file);
    const match = ["image/png", "image/jpg", "image/jpeg"];

    if (match.indexOf(file.memeType) === -1) {
      return `${Date.now()}-codeenv-${file.originalname}`;
    }

    return {
      bucketName: "photos",
      filename: `${Date.now()}-codeenv-${file.originalname}`,
    };
  },
});

export default multer({ storage });
