import express from "express";
import * as dotenv from 'dotenv';
import {v2 as cloudinary} from 'cloudinary';
import Post from '../models/posts.js'

dotenv.config();

const router = express.Router();


cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUD,
    api_key:process.env.CLOUDINARY_APIKEY,
    api_secret:process.env.CLOUDINARY_APISECRET

})


//Get posts
router.get('/',async(req,res)=>{
    try {
        const post = await Post.find({});

        res.status(200).json({success:true,data:post});
    } catch (error) {
        res.status(500).json({success:false,message:error});
        
    }
})

//upload posts
router.post('/',async(req,res)=>{
    try {
        const {name,prompt,photo} = req.body;
    const photoUrl = await cloudinary.uploader.upload(photo);

    const newPost = await Post.create({
        name,
        prompt,
        photo:photoUrl.url,
    })

    res.status(201).json({success:true, data:newPost})
        
    } catch (error) {
        res.status(500).json({success:false,message:error});
    }
})



export default router;
