import { Router } from "express";
import {
  createquestion,
  readallquestions,
} from "../controller/questioncontroler";

const router: Router = Router();

router.route("/create-question").post(createquestion);

router.route("/get-all-question").get(readallquestions);

export default router;
