"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const csscontroer_1 = require("../controller/csscontroer");
const router = (0, express_1.Router)();
router.route("/create-css-question").post(csscontroer_1.createcssquestion);
router.route("/get-all-css-question").get(csscontroer_1.readallcssqueations);
exports.default = router;
