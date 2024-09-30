"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const tailwindModel = new mongoose_1.Schema({
    instruction: { type: String, required: true },
    result: { type: [], required: true },
    output: { type: String, required: true },
    example: { type: String, required: true },
    question: { type: String, required: true },
    defaultcode: { type: String, required: true },
    tag: { type: [], required: true },
    usecase: { type: [], required: true },
}, { timestamps: true });
const myTailwindModel = mongoose_1.models.tailwind || (0, mongoose_1.model)("tailwind", tailwindModel);
exports.default = myTailwindModel;
