"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const questioncontroler_1 = require("../controller/questioncontroler");
const router = (0, express_1.Router)();
router.route("/create-question").post(questioncontroler_1.createquestion);
router.route("/get-all-question").get(questioncontroler_1.readallquestions);
exports.default = router;
