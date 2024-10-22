import express from "express";
import { PhoneModel } from "../models/PhoneMod";
import { PhoneSub } from "../subscribers/PhoneSub";

class PhoneClass {
    Create: express.Handler = async (req, res, next) => {
        try {
            const phone = PhoneModel.create({
                first: req.body.first,
                last: req.body.last,
                countryCode: req.body.countryCode,
                phone: req.body.phone
            });
            await phone.save();
            res.status(res.statusCode).json(phone);
        } catch (error) {
            res.status(res.statusCode)
            .json(res.statusMessage)
            next(error);
        }
    };

    FetchAll: express.Handler = async (req, res, next) => {
        try {
            await PhoneModel
                .find()
                .then((phones) => res.status(res.statusCode)
                .json(phones));
        } catch (error) {
            res.status(res.statusCode)
            .json(res.statusMessage)
            next(error);
        }
    };
};

export const PHONE: PhoneClass = new PhoneClass();




