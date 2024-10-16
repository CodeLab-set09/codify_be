"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.resetUserPassword = exports.forgetPassword = exports.forgetUserPassword = exports.verifyUserAccount = exports.createUser = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const email_1 = require("../utils/email");
const crypto_1 = __importDefault(require("crypto"));
const myUserModel_1 = __importDefault(require("../model/myUserModel"));
const fogerPassEmail_1 = require("../utils/emails/fogerPassEmail");
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password, userName } = req.body;
        const salt = yield bcrypt_1.default.genSalt(10);
        const token = crypto_1.default.randomBytes(3).toString("hex");
        const hashed = yield bcrypt_1.default.hash(password, salt);
        const user = yield myUserModel_1.default.create({
            email,
            userName,
            password: hashed,
            verifyToken: token,
        });
        (0, email_1.sendEmail)(user);
        return res
            .status(201)
            .json({ message: "created successfully", data: user });
    }
    catch (error) {
        return res.status(404).json({ message: error.message });
    }
});
exports.createUser = createUser;
const verifyUserAccount = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userID } = req.params;
        const { token } = req.body;
        const accountUser = yield myUserModel_1.default.findById(userID);
        if ((accountUser === null || accountUser === void 0 ? void 0 : accountUser.verifyToken) === token) {
            const user = yield myUserModel_1.default.findByIdAndUpdate(userID, {
                verifyToken: "",
                verify: true,
            }, { new: true });
            return res
                .status(201)
                .json({ message: "user account verified successfully", data: user });
        }
        else {
            return res.status(404).json({ message: "Invalid token" });
        }
    }
    catch (error) {
        return res.status(404).json({ message: error.message });
    }
});
exports.verifyUserAccount = verifyUserAccount;
const forgetUserPassword = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.body;
        const token = crypto_1.default.randomBytes(3).toString("hex");
        const getUser = yield myUserModel_1.default.findOne({ email });
        if (getUser && (getUser === null || getUser === void 0 ? void 0 : getUser.verify)) {
            const user = yield myUserModel_1.default.findByIdAndUpdate(getUser === null || getUser === void 0 ? void 0 : getUser._id, {
                verifyToken: token,
            }, { new: true });
            (0, email_1.sendEmail)(getUser);
            return res
                .status(201)
                .json({ message: "created successfully", data: user });
        }
        else {
            return res.status(404).json({ message: "user can't be found" });
        }
    }
    catch (error) {
        return res.status(404).json({ message: error.message });
    }
});
exports.forgetUserPassword = forgetUserPassword;
const forgetPassword = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.body;
        const findUser = yield myUserModel_1.default.findOne({ email });
        if (findUser) {
            (0, fogerPassEmail_1.forgetPassEmail)(findUser);
            res.status(200).json({ message: "User found", data: findUser });
        }
        else {
            res.status(400).json({ message: "User not found" });
        }
    }
    catch (error) {
        res.status(400).json({
            message: "Error Occured",
            error: error.message,
        });
    }
});
exports.forgetPassword = forgetPassword;
const resetUserPassword = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userID } = req.params;
        const { password } = req.body;
        const findUser = yield myUserModel_1.default.findById(userID);
        if (findUser) {
            const passCheck = yield bcrypt_1.default.compare(password, findUser.password);
            if (passCheck) {
                res.status(400).json({
                    message: "You can't use same password",
                });
            }
            else {
                const salt = yield bcrypt_1.default.genSalt(10);
                const hashed = yield bcrypt_1.default.hash(password, salt);
                const getD = yield myUserModel_1.default.findByIdAndUpdate(userID, {
                    password: hashed,
                }, { new: true });
                res.status(200).json({
                    message: "Password Changed",
                    data: getD,
                });
            }
        }
    }
    catch (error) {
        return res.status(404).json({ message: error.message });
    }
});
exports.resetUserPassword = resetUserPassword;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userID } = req.params;
        console.log("updateuser", userID);
        const { userName, password } = req.body;
        const salt = yield bcrypt_1.default.genSalt(10);
        const hashed = yield bcrypt_1.default.hash(password, salt);
        const getUser = yield myUserModel_1.default.findById(userID);
        if (getUser) {
            const user = yield myUserModel_1.default.findByIdAndUpdate(getUser, {
                userName,
                password: hashed,
            });
            return res
                .status(201)
                .json({ message: "User update successfully", data: user });
        }
        else {
            return res
                .status(404) // Changed to 400 for a more appropriate error status
                .json({ message: "deos not exist" });
        }
    }
    catch (error) {
        return res
            .status(404) // Changed to 400 for a more appropriate error status
            .json({ message: "User not update", error: error.message });
    }
});
exports.updateUser = updateUser;
