import { Gender , Language, License,Status,Residence,Sector,Type_phon, Land, City, Type} from "./enums"
import { PhonesForInquiries } from "./phonesForInquiries"
import { Siblings } from "./siblings"

export  interface Users {
    id?: number,
    type?: Type,
    name?: string,
    email: string,
    password: string,
    phon: string,
    dateOfBirth:Date,
    imagePath: string,                    //picture
    gender: Gender,
    languages: Language[],
    license: License,
    status: Status,
    residence: Residence,
    sector: Sector[],
    type_phon: Type_phon,
    hight: number,
    budget: number,
    parents_status: Status,
    father_name: string,
    mother_name: string,
    fatherOccupation: string,
    motherOccupation: string,
    land: Land,
    countryOfOrigin: Land,
    city: City,
    siblings: Siblings[],
    phonesForInquiries: PhonesForInquiries[],

}