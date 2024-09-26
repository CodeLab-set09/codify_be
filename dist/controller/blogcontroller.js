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
exports.readAllblog = exports.createblog = void 0;
// import blogdata from "../model/blogmodel";
const blogmodel_1 = __importDefault(require("../model/blogmodel"));
const createblog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, video, content, desc, image } = req.body;
        const blog = yield blogmodel_1.default.create({
            title,
            video,
            content,
            desc,
            image,
        });
        return res
            .status(201)
            .json({ message: "created successfully", data: blog });
    }
    catch (error) {
        return res.status(404).json({ message: error.message });
    }
});
exports.createblog = createblog;
const readAllblog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const blog = blogmodel_1.default.find();
        return res.status(201).json({ message: "all blog gotten", data: blog });
    }
    catch (error) {
        return res.status(404).json({ message: error.message });
    }
});
exports.readAllblog = readAllblog;
