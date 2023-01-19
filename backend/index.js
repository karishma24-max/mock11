require("dotenv").config();
const express = require('express');
const connect = require("./config/db");
const server = express();
const cors = require('cors');
server.use(express.json());
server.use(cors());
const userRouter = require("./features/user/user.router.js")

server.use("/user",userRouter);
//const User = require("./features/user/user.model");

server.get("/",(req,res)=>{
    res.send("Hello world!")
})


server.listen(8080,async(req,res)=>{
   try{
    await connect();
    console.log(`Database connected`)
   }
   catch(e){
    console.log(e)
   }
   console.log(`server listening at port ${8080}`)
});