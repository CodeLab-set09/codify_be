import { Router } from "express";
import { createCss } from "../controller/cssController";

const router: Router = Router();

router.route("/create-css-question").post(createCss);

// router.route("/get-all-css-question").get(readallcssqueations);

export default router;
