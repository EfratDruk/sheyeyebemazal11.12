import { Adjustment } from "./adjustment"
import { Type } from "./enums"

export interface Matchmaker{
     id:number,
     type:Type,
     name:string ,
     password: string ,
     email:string ,
     phone:string ,
     requirements: Adjustment[],   
}