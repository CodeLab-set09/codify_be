import { Router } from "express";
import {
  createblog,
  readAllblog,
  readOneBlog,
} from "../controller/blogcontroller";

const router: Router = Router();

router.route("/create-blog").post(createblog);

router.route("/get-all-blog").get(readAllblog);
router.route("/:blogID/get-one-blog").get(readOneBlog);

export default router;
