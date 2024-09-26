import { Router } from "express";
import { createblog, readAllblog,readoneblog } from "../controller/blogcontroller";

const router: Router = Router();

router.route("/create-blog").post(createblog);

router.route("/get-all-blog").get(readAllblog);
router.route("/get-one-blog").get(readoneblog);

export default router;
