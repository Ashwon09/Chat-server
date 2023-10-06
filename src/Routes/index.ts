import express, { Router } from "express";
import { roomRouter } from "./RoomRouter";

export const router: Router = express.Router();

router.use("/room", roomRouter);
