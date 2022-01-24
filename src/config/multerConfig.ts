import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, path.resolve(__dirname, "..", "..", "upload"));
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname);
  }
});

const uploads = multer({ storage: storage });

export default uploads ;