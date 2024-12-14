import { Adjustment } from "./adjustment";
import { Cover, Studies } from "./enums";
import { Her } from "./her";
import { Users } from "./users";

export interface Woman extends Users{
    id:number,
    studies: Studies ,
    occupation: string ,
    cover :Cover ,
    requirements: Adjustment[] ,
    her :Her ,
}