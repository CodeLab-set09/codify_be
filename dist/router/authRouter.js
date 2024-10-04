"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userController_1 = require("../controller/userController");
const multer_1 = __importDefault(require("multer"));
const express_1 = require("express");
const storage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./upload");
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9) + ".xlsx";
        cb(null, file.fieldname + "-" + uniqueSuffix);
    },
});
const upload = (0, multer_1.default)({ storage: storage }).single("upload");
// const upload = multer().single("upload");
const router = (0, express_1.Router)();
router.route("/register").post(userController_1.createUser);
router.route("/:userID/verify-account").patch(userController_1.verifyUserAccount);
router.route("/forget-password").patch(userController_1.forgetPassword);
router.route("/:userID/reset-password").patch(userController_1.resetUserPassword);
exports.default = router;
