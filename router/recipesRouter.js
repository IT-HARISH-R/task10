const express = require("express");

const resipes = require("../controllers/resipeController")

const recipesRouter = express.Router();

recipesRouter.post('/',resipes.createRecipe);
recipesRouter.get('/',resipes.getAllRecipes);
recipesRouter.get("/:id",resipes.getRecipeById)
recipesRouter.patch("/:id",resipes.updateRecipe);
recipesRouter.delete("/:id",resipes.deleteRecipe);


module.exports = recipesRouter;