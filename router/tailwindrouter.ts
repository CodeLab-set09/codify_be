import { Router } from "express";
import {
  createcssquestion,
  readallcssqueations,
} from "../controller/csscontroer";

const router: Router = Router();

router.route("/create-tailwind-question").post(createcssquestion);

router.route("/get-all-tailwind-question").get(readallcssqueations);

export default router;
