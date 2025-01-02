const mongoose = require("mongoose")

const recipeSchema = new mongoose.Schema({
    name: String,
    ingredients: [String],
    instructions: String,
    price: Number,
    createdAt: {
        type: Date,
        default: Date.now
    }
})


module.exports = mongoose.model("Recipe", recipeSchema, "recipes")