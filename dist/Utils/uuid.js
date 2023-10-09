"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchRoom = void 0;
const RoomController_1 = require("../Controller/RoomController");
const sortUUIDs = (uuids) => {
    return uuids.sort();
};
const SearchUUID = (arr, target) => {
    let low = 0;
    let high = arr.length - 1;
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        const midValue = arr[mid];
        if (midValue === target) {
            return true; // Found the target, return its index
        }
        else if (midValue < target) {
            low = mid + 1; // Search the right half
        }
        else {
            high = mid - 1; // Search the left half
        }
    }
    return false; // Target not found in the array
};
const searchRoom = (roomNumber) => {
    const createdRooms = RoomController_1.rooms;
    sortUUIDs(createdRooms);
    return SearchUUID(createdRooms, roomNumber);
};
exports.searchRoom = searchRoom;
