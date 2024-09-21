"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const cssModel = new mongoose_1.Schema({
    instruction: { type: String, required: true },
    result: { type: [], required: true },
    output: { type: String, required: true },
    example: { type: String, required: true },
    question: { type: String, required: true },
    defaultcode: { type: String, required: true },
    tag: { type: [], required: true },
    usecase: { type: [], required: true },
}, { timestamps: true });
const myCssModel = mongoose_1.models.css || (0, mongoose_1.model)("css", cssModel);
exports.default = myCssModel;
