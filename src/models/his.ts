import { Cover } from "./enums";
import { Man } from "./man";

export interface His{
    id:number,
    occupation :string,
    minAge:number,
    maxAge:number,
    height:number,
    cover :Cover ,
    man :Man ,
}