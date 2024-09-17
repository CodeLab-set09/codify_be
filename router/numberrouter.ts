import { Router } from "express";
import {
  createnumberquestion,
  readallnumberqueations,
} from "../controller/numbercontroler";

const router: Router = Router();

router.route("/create-number-question").post(createnumberquestion);

router.route("/get-all-number-question").get(readallnumberqueations);

export default router;
