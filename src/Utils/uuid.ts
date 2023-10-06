import { rooms } from "../Controller/RoomController";

const sortUUIDs = (uuids: string[]): string[] => {
  return uuids.sort();
};

const SearchUUID = (arr: string[], target: string): boolean => {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const midValue = arr[mid];

    if (midValue === target) {
      return true; // Found the target, return its index
    } else if (midValue < target) {
      low = mid + 1; // Search the right half
    } else {
      high = mid - 1; // Search the left half
    }
  }

  return false; // Target not found in the array
};

export const searchRoom = (roomNumber: string) => {
  const createdRooms = rooms;
  sortUUIDs(createdRooms);
  return SearchUUID(createdRooms, roomNumber);
};
