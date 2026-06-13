import { Recipe } from "../models/recipe.model";

const isRecipeOwner = asyncHandler(async (req, res, next) => {
    const { recipeId } = req.params;

    const recipe = await Recipe.findById(recipeId);

    if (!recipe) {
        throw new ApiError(404, "Recipe not found");
    }

    if (recipe.createdBy.toString() !== req.user._id.toString()) {
        throw new ApiError(403, "Access denied");
    }

    next();
});
export{isRecipeOwner}