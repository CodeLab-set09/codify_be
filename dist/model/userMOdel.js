"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userModel = (0, mongoose_1.model)("users", new mongoose_1.Schema({
    userName: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
    },
    verifyToken: {
        type: String,
    },
    verify: {
        type: Boolean,
        default: false,
    },
}, { timestamps: true }));
exports.default = userModel;
// export default model<iUserData>("users", userModel);
