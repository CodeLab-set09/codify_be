"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cssController_1 = require("../controller/cssController");
const router = (0, express_1.Router)();
router.route("/create-css-question").post(cssController_1.createCss);
router.route("/get-all-css-question").get(cssController_1.getallCssQuestions);
exports.default = router;
