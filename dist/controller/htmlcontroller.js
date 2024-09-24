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
exports.readallhtmlqueations = exports.createhtmlquestion = void 0;
const htmlmodel_1 = __importDefault(require("../model/htmlmodel"));
const createhtmlquestion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { instruction, answer, question, tag } = yield req.body;
        const getD = yield htmlmodel_1.default.create({
            instruction,
            answer,
            question,
            tag,
        });
        return res
            .status(201)
            .json({ message: "created successfully", data: getD });
    }
    catch (error) {
        return res.status(404).json({ message: error.message });
    }
});
exports.createhtmlquestion = createhtmlquestion;
const readallhtmlqueations = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getD = yield htmlmodel_1.default.find();
        return res
            .status(201)
            .json({ message: "created successfully", data: getD });
    }
    catch (error) {
        return res.status(404).json({ message: error.message });
    }
});
exports.readallhtmlqueations = readallhtmlqueations;
