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
exports.readalldsaqueations = exports.createdsaquestion = void 0;
const dsamodel_1 = __importDefault(require("../model/dsamodel"));
const createdsaquestion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { instruction, mainAnswer, output, example, question, defaultcode, url, tag, usecase, result, } = yield req.body;
        const getD = yield dsamodel_1.default.create({
            instruction,
            result,
            output,
            example,
            question,
            defaultcode,
            url,
            tag,
            usecase,
        });
        return res
            .status(201)
            .json({ message: "created successfully", data: getD });
    }
    catch (error) {
        return res.status(404).json({ message: error.message });
    }
});
exports.createdsaquestion = createdsaquestion;
const readalldsaqueations = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getD = yield dsamodel_1.default.find();
        return res
            .status(201)
            .json({ message: "created successfully", data: getD });
    }
    catch (error) {
        return res.status(404).json({ message: error.message });
    }
});
exports.readalldsaqueations = readalldsaqueations;
