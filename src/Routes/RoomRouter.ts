import express, { Router } from "express";
import { getRoomNumber } from "../Controller/RoomController";

export const roomRouter: Router = express.Router();

roomRouter.get("/get", getRoomNumber);
