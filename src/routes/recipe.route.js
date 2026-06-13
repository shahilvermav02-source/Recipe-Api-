import { Router } from "express";
import { verifyJWT } from "../middleware/auth.middleware.js";
import { isRecipeOwner } from "../middleware/verfiy.middleware";
import {
    createRecipe,
    updateRecipe,
    deleteRecipe,
    getAllRecipes,
    getMyRecipes,
    getRecipebyId,
    getUserRecipes
} from "../controller/recipe.controller.js";

const router = Router();

router.route("/createRecipe").post(
    verifyJWT,
    createRecipe
);

router.route("/getAllRecipe").get(
    getAllRecipes
);

router.route("/getMyRecipes").get(
    verifyJWT,
    getMyRecipes
);

router.route("/getUserRecipes/:userId").get(
    getUserRecipes
);

router.route("/getRecipebyId/:recipeId").get(
    getRecipebyId
);

router.route("/updateRecipe/:recipeId").patch(
    verifyJWT,
    isRecipeOwner,
    updateRecipe
);

router.route("/deleteRecipe/:recipeId").delete(
    verifyJWT,
    isRecipeOwner,
    deleteRecipe
);

export default router;