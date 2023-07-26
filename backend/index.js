import express from 'express';

import * as dotenv from 'dotenv'
import cors from 'cors';

dotenv.config()

const app = express();
app.use(cors());
app.use(express.json())

app.get('/',async(req,res)=>{
    res.send("Hey There! Seems like you are successful in starting a server")
})

const startServer= async()=>{
    app.listen(8080,()=>{
        console.log(`Server has started on port 8080`)
    })
}
startServer();