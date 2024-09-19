"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const blogModel = new mongoose_1.Schema({
    video: {
        type: String,
    },
    title: {
        type: String,
    },
    desc: {
        type: String,
    },
    image: {
        type: String,
    },
    content: {
        type: String,
    },
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("blogs", blogModel);
