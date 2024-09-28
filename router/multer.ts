import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "/upload");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix =
      Date.now() + "-" + Math.round(Math.random() * 1e9) + ".xlsx";
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

const upload: any = multer({ storage: storage }).single("upload");
