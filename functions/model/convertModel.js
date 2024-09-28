"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const convertModel = new mongoose_1.Schema({
    studentName: {
        type: String,
    },
    studentLocation: {
        type: String,
    },
    studentClass: {
        type: String,
    },
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("converts", convertModel);
