"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const loopcontroler_1 = require("../controller/loopcontroler");
const router = (0, express_1.Router)();
router.route("/create-loop-question").post(loopcontroler_1.createloopquestion);
router.route("/get-all-loop-question").get(loopcontroler_1.readallloopqueations);
exports.default = router;
