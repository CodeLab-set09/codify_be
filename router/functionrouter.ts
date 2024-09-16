import { Router } from "express";
import {
  createfunctionquestion,
  readallfunctionqueations,
} from "../controller/functioncontroller";

const router: Router = Router();

router.route("/create-function-question").post(createfunctionquestion);

router.route("/get-all-function-question").get(readallfunctionqueations);

export default router;
