import mongoose from "mongoose";

const  dbConnect=async()=>{
     try{
        await mongoose.connect("mongodb://localhost:27017/PUJA-MART")
        console.log("database is  connected ......");
     }
     catch{
        console.log("database is not connected ......");  
     }
}
export default dbConnect;