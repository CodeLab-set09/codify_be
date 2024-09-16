import { Router } from "express";
import {
  createarrayquestion,
  readallarrayqueations,
} from "../controller/arraycontroller";

const router: Router = Router();

router.route("/create-array-question").post(createarrayquestion);

router.route("/get-all-array-question").get(readallarrayqueations);

export default router;
