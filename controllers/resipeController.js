const Recipe = require("../moduls/recipesmodul")

const recipesControler = {
    createRecipe: async (request, response) => {
        try {
            console.log(request.body);

            const { name, ingredients, instructions, price } = request.body;


            const newRecipe = new Recipe({
                name,
                ingredients,
                instructions,
                price,
            });

            await newRecipe.save();

            response.json({ message: "create Recipe Successful " })
        }
        catch (error) {
            response.json({ message: error })
        }
    },
    getAllRecipes: async (request, response) => {
        try {
            const newRecipe = await Recipe.find();
            response.json(newRecipe);
        }
        catch (error) {
            response.statue(500).json({ message: error })
        }
    },
    getRecipeById: async (request, response) => {
        try {
            const { id } = request.params;
            const newRecipe = await Recipe.findById(id);
            response.json(newRecipe);
        }
        catch (error) {
            response.status(500).json(error)
        }
    },
    updateRecipe: async (request, response) => {
        try {
            const { id } = request.params;
            const { name, ingredients, instructions, price } = request.body;
            const updatewRecipe = {
                name,
                ingredients,
                instructions,
                price
            }
            const newRecipe = await Recipe.findByIdAndUpdate(id, updatewRecipe)
            response.json({ message: "update Recipe Successful " })

        }
        catch (error) {
            response.status(500).json(error)
        }
    },
    deleteRecipe: async (request,response)=>{
        try{
            const {id} = request.params;
            await Recipe.findByIdAndDelete(id); 
            response.json({message: "Delete Recipe Successful "})
        }
        catch(error){
            response.json(error)
        }
    }
}


module.exports = recipesControler; 