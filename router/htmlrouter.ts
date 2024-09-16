import { Router } from "express";
import {
  createhtmlquestion,
  readallhtmlqueations,
} from "../controller/htmlcontroller";

const router: Router = Router();

router.route("/create-html-question").post(createhtmlquestion);

router.route("/get-all-html-question").get(readallhtmlqueations);

export default router;
