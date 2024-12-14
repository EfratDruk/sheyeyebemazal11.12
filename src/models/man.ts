import { Adjustment } from "./adjustment";
import { Beard,Smoking,Studies,StatusMan } from "./enums";
import { His } from "./his";
import { Users } from "./users";

export interface Man extends Users{
    id:number,
    beard: Beard,
    smoking: Smoking ,
    studies :Studies ,
    occupation: String  ,
    future :StatusMan ,
    requirements: Adjustment[],
    his :His,
}