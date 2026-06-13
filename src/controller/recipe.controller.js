import { Recipe }from "../models/recipe.model"
import { asyncHandler } from "../utils/asycn.handler"
import { ApiError } from "../utils/api_error"
import { User } from "../models/user.model"
import { ApiResponse } from "../utils/api_response"
const createRecipe = asyncHandler(async(req,res)=>{
     const {title,description,ingredient,category}=req.body
     const {user} = req.params
     const validUser = await User.findById(user);
     if(!isvalidUser)
     {
        throw new ApiError(404,"User ID not Found");
     }
     const recipe = await Recipe.create({
        title,
        description,
        ingredient,
        category,
        createdBy: new mongoose.Types.ObjectId(user),
     })
    return res.status(201).json(
        new ApiResponse(201,recipe,"Recipe Created Successfully")
     )
})
const updateRecipe = asyncHandler(async(req,res)=>{
     const {title,description,ingredient,category}=req.body
     const {recipeId} = req.params
     const updatedRecipe= await Recipe.findByIdAndUpdate(recipeId,{
        title,
        description,
        ingredient,
        category,
     },
    {new:true,
        runValidators: true
    });
    if(!updatedRecipe){
        throw new ApiError(404,"Recipe not Found");
    }
    return res
             .status(201)
             .json(updateRecipe,"Recipe Updated Successfully");
})
const deleteRecipe = asyncHandler(async(req,res)=>{
    const {recipeId}=req.params
    const deletrecipe = await Recipe.findByIdAndDelete(recipeId);
    if(!deletrecipe)
    {
         throw new ApiError(404,"Recipe not Found");
    }
     return res
             .status(201)
             .json(deleteRecipe,"Recipe Deleted Successfully");
})
const getRecipebyId = asyncHandler(async(req,res)=>{
     const {recipeId}=req.params
    const recipe = await Recipe.findById(recipeId);
    if(!recipe)
    {
         throw new ApiError(404,"Recipe not Found");
    }
     return res
             .status(201)
             .json(recipe,"Recipe fetch Successfully");
})
const getAllRecipes= asyncHandler(async(req,res)=>{
     const recipes = await Recipe.find();

    return res.status(200).json(
        new ApiResponse(
            200,
            recipes,
            "Recipes fetched successfully"
        )
    );
})
const getMyRecipes = asyncHandler(async (req, res) => {

    const recipes = await Recipe.find({
        createdBy: req.user._id
    });

    return res.status(200).json(
        new ApiResponse(
            200,
            recipes,
            "Recipes fetched successfully"
        )
    );
});
const getUserRecipes = asyncHandler(async (req, res) => {

    const { userId } = req.params;

    const recipes = await Recipe.find({
        createdBy: userId
    }).populate("createdBy", "username email");

    return res.status(200).json(
        new ApiResponse(
            200,
            recipes,
            "Recipes fetched successfully"
        )
    );
});
