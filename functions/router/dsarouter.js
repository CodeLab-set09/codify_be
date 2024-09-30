"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dsacontroller_1 = require("../controller/dsacontroller");
const router = (0, express_1.Router)();
router.route("/create-dsa-question").post(dsacontroller_1.createdsaquestion);
router.route("/get-all-dsa-question").get(dsacontroller_1.readalldsaqueations);
exports.default = router;
