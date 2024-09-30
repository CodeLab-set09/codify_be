"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const numbercontroler_1 = require("../controller/numbercontroler");
const router = (0, express_1.Router)();
router.route("/create-number-question").post(numbercontroler_1.createnumberquestion);
router.route("/get-all-number-question").get(numbercontroler_1.readallnumberqueations);
exports.default = router;
