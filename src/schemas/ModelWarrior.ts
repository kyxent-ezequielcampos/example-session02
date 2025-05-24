import { model, Schema } from "mongoose";
import { warriorInterface } from "../interfaces/warrior.interface";

const SchemaWarrior = new Schema<warriorInterface>({
    name : {
        type :String,
        required : true
    },
    age : {
        type : Number,
        required : true
    },
    powers : {
        type : [],
        required : true
    },
    guns : {
        type : [],
        required : true
    },

    typeContext : {
        type : String,
        required : true
    }

})

export const ModelWarrior = model("warriors", SchemaWarrior)