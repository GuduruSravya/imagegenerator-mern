import express from 'express';

import * as dotenv from 'dotenv'
import cors from 'cors';
import connectDB from './mongodb/connect.js';
import postRoutes from './mongodb/routes/postRoutes.js';
import aiRoutes from './mongodb/routes/aiRoutes.js';


dotenv.config()

const app = express();
app.use(cors());
app.use(express.json())
app.use('/api/v1/post',postRoutes);
app.use('/api/v1/ai',aiRoutes);



app.get('/',async(req,res)=>{
    res.send("Hey There! Seems like you are successful in starting a server")
})

const startServer= async()=>{
    try{
        connectDB(process.env.MONGO_URI);
        app.listen(8080,()=>{
            console.log(`Server has started on port 8080`)
        });
    }catch(error){
        console.log(error);

    }
    
}
startServer();