"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const htmlModel = new mongoose_1.Schema({
    instruction: { type: String, required: true },
    answer: { type: String, required: true },
    question: { type: String, required: true },
    tag: { type: [], required: true },
}, { timestamps: true });
const myHtmlModel = mongoose_1.models.html || (0, mongoose_1.model)("html", htmlModel);
exports.default = myHtmlModel;
