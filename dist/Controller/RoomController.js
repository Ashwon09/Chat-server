"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRoomNumber = exports.rooms = void 0;
const uuid_1 = require("uuid");
exports.rooms = ["550e8400-e29b-41d4-a716-446655440000"];
const getRoomNumber = (req, res) => {
    const newUUID = (0, uuid_1.v4)();
    exports.rooms.push(newUUID);
    console.log(`total rooms created is ${exports.rooms.length}`);
    return res.status(200).json({ roomNumber: newUUID });
};
exports.getRoomNumber = getRoomNumber;
