"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });

    }
  });
exports.createUser = createUser;
const verifyUserAccount = (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {

    }
  });
exports.verifyUserAccount = verifyUserAccount;
const forgetUserPassword = (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {

    }
  });
exports.forgetUserPassword = forgetUserPassword;
const resetUserPassword = (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {

        return res
          .status(201)
          .json({ message: "created successfully", data: user });
      } else {
        return res.status(404).json({ message: "user can't be found" });
      }
    } catch (error) {
      return res.status(404).json({ message: error.message });
    }
  });
exports.resetUserPassword = resetUserPassword;
