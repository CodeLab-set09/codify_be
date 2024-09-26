"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const reactcontroller_1 = require("../controller/reactcontroller");
const router = (0, express_1.Router)();
router.route("/create-react-question").post(reactcontroller_1.createreactquestion);
router.route("/get-all-react-question").get(reactcontroller_1.readallreactqueations);
exports.default = router;
