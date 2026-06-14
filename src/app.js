import express from 'express';
import cors from 'cors';
import authRouter from "./routes/auth.routes.js" 
import recipeRouter from "./routes/recipe.route.js" 
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//cors configuration
app.use(cors(
    {
        origin:process.env.CORS_ORIGIN || 'http://localhost:3000',
        credentials:true,
        methods:['GET','POST','PUT','DELETE','OPTIONS','PATCH'],
        allowedHeaders:['Content-Type','Authorization']
    }
))
//routes
app.use("/api/v1/recipes",recipeRouter);
app.use("/api/v1/auth", authRouter);

app.get("/",(req,res)=>{
    res.send("hello world");
})

app.get("/shahil",(req,res)=>{
    res.send("You are learning to build own your own");
})

export default app;