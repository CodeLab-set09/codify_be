"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const typescriptcontroller_1 = require("../controller/typescriptcontroller");
const router = (0, express_1.Router)();
router.route("/create-typescript-question").post(typescriptcontroller_1.createtypescriptquestion);
router.route("/get-all-typescript-question").get(typescriptcontroller_1.readalltypescriptqueations);
exports.default = router;
