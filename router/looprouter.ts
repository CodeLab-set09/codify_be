import { Router } from "express";
import {
  createloopquestion,
  readallloopqueations,
} from "../controller/loopcontroler";

const router: Router = Router();

router.route("/create-loop-question").post(createloopquestion);

router.route("/get-all-loop-question").get(readallloopqueations);

export default router;
