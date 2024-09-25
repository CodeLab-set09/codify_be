import { Router } from "express";
import { createJsQuestion, getJSQuestions } from "../controller/jsController";

const router: Router = Router();

router.route("/create-js-question").post(createJsQuestion);

router.route("/get-all-js-question").get(getJSQuestions);

export default router;
