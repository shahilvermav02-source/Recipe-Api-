import dotenv from 'dotenv';// why do we import this package? -> to load environment variables from a .env file into process.env
import express from 'express';// why do we import this package? -> to create an Express application for handling HTTP requests and responses
import cors from 'cors';// why do we import this package? -> to enable Cross-Origin Resource Sharing (CORS) for our Express application
dotenv.config({
   path:'./.env',
});

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get("/",(req,res)=>{
    res.send("hello world");
})
app.get("/shahil",(req,res)=>{
    res.send("You are learning to build own your own");
})
app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})