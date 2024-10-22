import { EntitySubscriberInterface, 
    InsertEvent, EventSubscriber } from "typeorm";
import { PhoneModel } from "../models/PhoneMod";

@EventSubscriber()
export class PhoneSub implements EntitySubscriberInterface<PhoneModel> {
    listenTo(): Function {
        return PhoneModel;
    }

    beforeInsert(event: InsertEvent<PhoneModel>) {
        console.log(
            "BEFORE INSERT PHONE",
            event.entity.countryCode = 1
        );
    }
};





