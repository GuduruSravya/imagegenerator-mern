import mongoose from "mongoose";

const post = mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please give name']
    },
    prompt:{
        type:String,
        required:[true,'Please give prompt']
    },
    photo:{
        type:String,
        required:true
    },

})

const postSchema = mongoose.model('Post',post);

export default postSchema;