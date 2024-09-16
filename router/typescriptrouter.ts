import { Router } from "express";
import {
  createtypescriptquestion,
  readalltypescriptqueations,
} from "../controller/typescriptcontroller";

const router: Router = Router();

router.route("/create-typescript-question").post(createtypescriptquestion);

router.route("/get-all-typescript-question").get(readalltypescriptqueations);

export default router;
