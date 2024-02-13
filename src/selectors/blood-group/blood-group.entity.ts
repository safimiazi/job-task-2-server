/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class BloodGroup {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name: string;

}