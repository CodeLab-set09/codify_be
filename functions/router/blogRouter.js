"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const blogcontroller_1 = require("../controller/blogcontroller");
const router = (0, express_1.Router)();
router.route("/create-blog").post(blogcontroller_1.createblog);
router.route("/get-all-blog").get(blogcontroller_1.readAllblog);
router.route("/:blogID/get-one-blog").get(blogcontroller_1.readOneBlog);
exports.default = router;
