import express from "express"
import cors from "cors"
import gameRouter from "./src/routers/gameRouters.js"
import customerRouter from "./src/routers/customerRouter.js"
import rentalRouter from "./src/routers/rentalsRouter.js"
import dotenv from "dotenv";

dotenv.config();

const app = express()
app.use(express.json())
app.use(cors())

app.use([gameRouter, customerRouter, rentalRouter]) 

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{console.log(`Listening on ${PORT}`)})