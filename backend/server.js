import express from "express";
import dbConnect from "./config/db.js";
import user from "./model/user.js";
const port=1478;

const app=express();

dbConnect();
app.use(express.json());

app.post('/signup',async(req,res)=>{
    const {name,email,password}=req.body;

    const extuser=await user.findOne({email})
    if(extuser){
        return res.json({message:"user already exists"})
    }

    await user.create({
        name,
        email,
        password
         
    })
    console.log(newUser);

return res.json({ message: "user added..." });
})
app.listen(port,()=>{
    console.log("server started at :-",port);  
})