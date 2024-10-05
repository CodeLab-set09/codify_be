"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const htmlcontroller_1 = require("../controller/htmlcontroller");
const router = (0, express_1.Router)();
router.route("/create-html-question").post(htmlcontroller_1.createhtmlquestion);
router.route("/get-all-html-question").get(htmlcontroller_1.readallhtmlqueations);
exports.default = router;
