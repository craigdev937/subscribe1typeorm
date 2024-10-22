import { BaseEntity, Column, Entity, 
    PrimaryGeneratedColumn
} from "typeorm";

@Entity({name: "phones"})
export class PhoneModel extends BaseEntity {
    @PrimaryGeneratedColumn() id: number;
    @Column() first: string;
    @Column() last: string;
    @Column() countryCode: number;
    @Column() phone: number;
};


