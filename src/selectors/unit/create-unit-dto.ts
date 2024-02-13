/* eslint-disable prettier/prettier */


import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUnitDto {
    @IsNotEmpty()
    @IsString()
    name: string;

}