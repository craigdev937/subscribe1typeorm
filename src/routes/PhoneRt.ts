import express from "express";
import { IndexHome } from "../controllers/PhoneCon";

export const phoneRt: express.Router = express.Router();
    phoneRt.get("/", IndexHome);



    