import { Router } from "express";
import {
  createreactquestion,
  readallreactqueations,
} from "../controller/reactcontroller";

const router: Router = Router();

router.route("/create-react-question").post(createreactquestion);

router.route("/get-all-react-question").get(readallreactqueations);

export default router;
