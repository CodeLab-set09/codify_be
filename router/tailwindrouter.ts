import { Router } from "express";
import {
  createtailwindquestion,
  readalltailwindqueations,
} from "../controller/tailwindcontroler";

const router: Router = Router();

router.route("/create-tailwind-question").post(createtailwindquestion);

router.route("/get-all-tailwind-question").get(readalltailwindqueations);

export default router;
