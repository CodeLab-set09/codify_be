"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const functioncontroller_1 = require("../controller/functioncontroller");
const router = (0, express_1.Router)();
router.route("/create-function-question").post(functioncontroller_1.createfunctionquestion);
router.route("/get-all-function-question").get(functioncontroller_1.readallfunctionqueations);
exports.default = router;
