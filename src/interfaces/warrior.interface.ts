import { gunsType, powersType, typeContextType } from "../types/warrior.types";



export interface warriorInterface {
    name : string,
    age : number,
    powers : powersType[],
    guns : gunsType[],
    typeContext : typeContextType
}