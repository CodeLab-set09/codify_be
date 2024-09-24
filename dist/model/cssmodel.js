"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const cssModel = new mongoose_1.Schema({
    instruction: { type: String },
    result: { type: [] },
    output: { type: String },
    example: { type: String },
    question: { type: String },
    defaultcode: { type: String },
    tag: { type: [] },
    usecase: { type: [] },
}, { timestamps: true });
const myCssModel = mongoose_1.models.cssquestions || (0, mongoose_1.model)("cssquestions", cssModel);
exports.default = myCssModel;
