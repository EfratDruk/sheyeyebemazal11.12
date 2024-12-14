import { StatusAdjustment } from "./enums";
import { Man } from "./man";
import { Matchmaker } from "./matchmaker"
import { Woman } from "./woman";

export interface Adjustment{
    id: number,
    manId:Man,
    womanId :Woman ,
    matchmakerId: Matchmaker,
    description: string,
    statusAdjustment: StatusAdjustment ,
}