"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const jsController_1 = require("../controller/jsController");
const router = (0, express_1.Router)();
router.route("/create-js-question").post(jsController_1.createJsQuestion);
router.route("/get-all-js-question").get(jsController_1.getJSQuestions);
exports.default = router;
