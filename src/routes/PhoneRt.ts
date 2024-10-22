import express from "express";
import { PHONE } from "../controllers/PhoneCon";

export const phoneRt: express.Router = express.Router();
    phoneRt.post("/", PHONE.Create);
    phoneRt.get("/", PHONE.FetchAll);



    