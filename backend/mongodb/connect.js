import mongoose from "mongoose";


const connectDB = async(uri)=>{
    //This is suggestable in case of search operations
    mongoose.set('strictQuery',true);

    await mongoose.connect(uri)
    .then(()=>console.log("Mongo DB connected"))
    .catch((err)=>console.log(err))
}

export default connectDB

