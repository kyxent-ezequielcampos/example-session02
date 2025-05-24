import express, { json } from "express"
import { connect } from "mongoose";
import "dotenv/config"
import env from "env-var"
import { initWarriorRoutes } from "./routes/warriors.routes";


const Enviroments = {
    MONGO : env.get("MONGODB_URI").required().asUrlString()
}

const app = express()

app.use(json())
app.use("/api", initWarriorRoutes())

const mongoService = async () => {
    try {
        await connect(Enviroments.MONGO)
        console.log("connect to mongo successfully");
        
    } catch (error) {
        throw new Error(`${error}`);   
    }
}

mongoService()

app.listen(3000, () => {
    console.log("server running in http://localhost:3000");
    
})