import { Router } from "express";
import {
  createdsaquestion,
  readalldsaqueations,
} from "../controller/dsacontroller";

const router: Router = Router();

router.route("/create-dsa-question").post(createdsaquestion);

router.route("/get-all-dsa-question").get(readalldsaqueations);

export default router;
