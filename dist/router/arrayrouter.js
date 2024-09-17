"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const arraycontroller_1 = require("../controller/arraycontroller");
const router = (0, express_1.Router)();
router.route("/create-array-question").post(arraycontroller_1.createarrayquestion);
router.route("/get-all-array-question").get(arraycontroller_1.readallarrayqueations);
exports.default = router;
