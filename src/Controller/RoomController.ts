import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";

export const rooms: string[] = ["550e8400-e29b-41d4-a716-446655440000"];

export const getRoomNumber = (req: Request, res: Response) => {
  const newUUID: string = uuidv4();
  rooms.push(newUUID);
  console.log(`total rooms created is ${rooms.length}`);
  return res.status(200).json({ roomNumber: newUUID });
};
