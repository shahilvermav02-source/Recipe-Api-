import express from 'express';
import cors from 'cors';
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

//cors configuration
app.use(cors(
    {
        origin:process.env.CORS_ORIGIN || 'http://localhost:3000',
        credentials:true,
        methods:['GET','POST','PUT','DELETE','OPTIONS','PATCH'],
        allowHeaders:['Content-Type','Authorization']
    }
))
app.get("/",(req,res)=>{
    res.send("hello world");
})
app.get("/shahil",(req,res)=>{
    res.send("You are learning to build own your own");
})
app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})
export default app;