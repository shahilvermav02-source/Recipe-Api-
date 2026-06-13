import mongoose, { Schema } from "mongoose";

const recipeSchema = new Schema(
    {
        avatar: {
      type: {
        url: String,
        localPath: String,
      },
      default: {
        url: "",
        localPath: "",
      },
    },
        Title:{
            type: String,
            required: true,
            trim : true,
            index:true,
        },
        description:{
            type: String,
            required: true,
            trim : true,
        },
        ingredient:{
            type: String,
            required: true,
        },
        category:{
            type: String,
            required: true,
            trim : true,
            index:true,
        },
        createdBy:{
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
            index: true,
        },
    },
    {timestamps:true},
)
export const Recipe = mongoose.model("Recipe",recipeSchema)
