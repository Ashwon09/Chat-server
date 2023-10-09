"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.roomRouter = void 0;
const express_1 = __importDefault(require("express"));
const RoomController_1 = require("../Controller/RoomController");
exports.roomRouter = express_1.default.Router();
exports.roomRouter.get("/get", RoomController_1.getRoomNumber);
