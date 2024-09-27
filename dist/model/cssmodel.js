"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const modelCss = new mongoose_1.Schema({
    instruction: {
        type: String,
    },
    question: {
        type: String,
    },
    example: {
        type: String,
    },
    result: {
        type: [],
    },
}, { timestamps: true });
const myModelCss = mongoose_1.models.cssQuests || (0, mongoose_1.model)("cssQuests", modelCss);
exports.default = myModelCss;
