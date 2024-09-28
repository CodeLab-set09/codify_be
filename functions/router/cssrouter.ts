import { Router } from "express";
import { createCss, getallCssQuestions } from "../controller/cssController";

const router: Router = Router();

router.route("/create-css-question").post(createCss);

router.route("/get-all-css-question").get(getallCssQuestions);

export default router;
