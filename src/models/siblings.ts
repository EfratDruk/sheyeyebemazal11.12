import { Gender, Status, Studies } from "./enums";
import { Users } from "./users";

export interface Siblings{
     id: number,
    user:Users ,
    gender: Gender ,
    status :Status ,
    studies :Studies ,
}