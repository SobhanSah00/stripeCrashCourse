import express from "express"
import cors from "cors"
// import stripe from 'stripe'
// import uuid from "uuid"
import dotenv from "dotenv"

const app = express();

app.use(express.json())
app.use(cors())

dotenv.config({
    path : './env'
})

app.get("/",(req,res) => {
    res.send("it works fine .")
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`⚙️  Server running on port ${PORT} 🔥`);
    
})