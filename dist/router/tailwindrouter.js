"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tailwindcontroler_1 = require("../controller/tailwindcontroler");
const router = (0, express_1.Router)();
router.route("/create-tailwind-question").post(tailwindcontroler_1.createtailwindquestion);
router.route("/get-all-tailwind-question").get(tailwindcontroler_1.readalltailwindqueations);
exports.default = router;
