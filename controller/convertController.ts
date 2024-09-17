import { Request, Response } from "express";
import convertModel from "../model/convertModel";
import cloudinary from "../router/cloudinary";
import etx from "convert-excel-to-json";
import xx from "simple-excel-to-json";

export const convertFile = async (req: any, res: Response) => {
  try {
    const { password } = req.body;
    const { userID } = req.params;

    const result = etx({
      sourceFile: req.file.path,
      //   header: {
      //     rows: 1,
      //   },
      //   sheets: ["sheet1"],
    });

    const doc = xx.parseXls2Json(req.file.path);

    console.log(doc);
    // await cloudinary.uploader.upload(req.files)

    const user = await convertModel.create({
      verifyToken: "",
    });

    return res.status(201).json({
      message: "created successfully",
      //   data: user,
    });
  } catch (error: any) {
    return res.status(404).json({ message: error.message });
  }
};
