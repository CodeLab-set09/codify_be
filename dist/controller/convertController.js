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
exports.convertFile = void 0;
const convertModel_1 = __importDefault(require("../model/convertModel"));
const convert_excel_to_json_1 = __importDefault(require("convert-excel-to-json"));
const simple_excel_to_json_1 = __importDefault(require("simple-excel-to-json"));
const convertFile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { password } = req.body;
        const { userID } = req.params;
        const result = (0, convert_excel_to_json_1.default)({
            sourceFile: req.file.path,
            //   header: {
            //     rows: 1,
            //   },
            //   sheets: ["sheet1"],
        });
        const doc = simple_excel_to_json_1.default.parseXls2Json(req.file.path);
        console.log(doc);
        // await cloudinary.uploader.upload(req.files)
        const user = yield convertModel_1.default.create({
            verifyToken: "",
        });
        return res.status(201).json({
            message: "created successfully",
            //   data: user,
        });
    }
    catch (error) {
        return res.status(404).json({ message: error.message });
    }
});
exports.convertFile = convertFile;
