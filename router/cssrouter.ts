import { Router } from "express";
import {
  createcssquestion,
  readallcssqueations,
} from "../controller/csscontroer";

const router: Router = Router();

router.route("/create-css-question").post(createcssquestion);

router.route("/get-all-css-question").get(readallcssqueations);

export default router;
