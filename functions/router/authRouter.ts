import {
  createUser,
  forgetUserPassword,
  resetUserPassword,
  verifyUserAccount,
} from "../controller/userController";
import multer from "multer";

import { Router } from "express";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./upload");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix =
      Date.now() + "-" + Math.round(Math.random() * 1e9) + ".xlsx";
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

const upload: any = multer({ storage: storage }).single("upload");
// const upload = multer().single("upload");

const router: Router = Router();

router.route("/register").post(createUser);

router.route("/:userID/verify-account").patch(verifyUserAccount);

router.route("/forget-password").patch(forgetUserPassword);
router.route("/:userID/reset-password").patch(resetUserPassword);

export default router;
