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
exports.getallCssQuestions = exports.createCss = void 0;
const cssmodel_1 = __importDefault(require("../model/cssmodel"));
const createCss = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { instruction, example, question, result } = yield req.body;
        const getCss = yield cssmodel_1.default.create({
            instruction,
            result,
            example,
            question,
        });
        return res.status(201).json({
            message: "css questions created",
            data: getCss,
        });
    }
    catch (error) {
        res.status(404).json({
            message: "CSS not created",
            error: error.message,
        });
    }
});
exports.createCss = createCss;
const getallCssQuestions = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getD = yield cssmodel_1.default.find();
        return res
            .status(201)
            .json({ message: "all css questions gotten", data: getD });
    }
    catch (error) {
        return res.status(404).json({ message: error.message });
    }
});
exports.getallCssQuestions = getallCssQuestions;
