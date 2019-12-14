const mongoose = require('mongoose');

const Recipe = mongoose.model('recipe');

const getRecipes = function(req,res){
    Recipe.find().exec(function(err,recipedata){
        console.log(recipedata)
                if(err){
                    res
                    .status(404)
                    .json(err);
                    return;    
                }
                res
                 .status(200)
                 .json(recipedata);
}); 
};

const createRecipe = function(req,res){
    Recipe.create({
        name:req.body.name,
        author:req.body.author,
        ingredients:req.body.ingredients,
        cookingTime:req.body.cookingTime,
        rating:req.body.rating
    },(err,recipedata)=>{
        if(err){
            res
            .status(400)
            .json(err);
        }else{
            res
            .status(201)
            .json(recipedata);
        }
    });
};

const getSingleRecipe = function(req,res){
    Recipe       
        .findById(req.params.recipeid)
        .exec((err, recipe) => {
        if (!Recipe) {
            return res
            .status(404)
            .json({"message": "recipe not found" 
                  });                
                       
            } else if (err) {
                return res
                    .status(404)
                    .json(err); 
                } res 
                    .status(200)
                    .json(recipe);
    }); 
};

const updateRecipe = function(req,res){
     if(!req.params.recipeid){
        res
        .status(404)
        .json({"message":"Not found, recipeid is required"});
        return;
    }
    Recipe.findById(req.params.recipeid)
    .exec((err,recipedata)=>{
        console.log("asd" + recipedata)
        if(!recipedata)
            {
                res
                .json(404)
                .status({"message":"recipeid not found"});
                return;
            }else if(err){
                res
                .status(400)
                .json(err);

                return
            }

            recipedata.cookingTime = req.body.cookingTime;
            recipedata.rating = req.body.rating;
            recipedata.name = req.body.name;
            recipedata.author = req.body.author;
            recipedata.ingredients = req.body.ingredients;

            recipedata.save( (err, recipedata) => {
                console.log(err)
                if(err) {
                    res.status(404)
                        .json(err)
                    return
                } else {
                    res.status(200)
                        .json(recipedata)
                }
            })
    });
};

const deleteRecipe = function(req,res){
     const recipeid = req.params.recipeid;
    
    if(recipeid){
        Recipe
        .findByIdAndRemove(recipeid)
        .exec((err,recipedata)=>{
            if(err){
                res
                .status(404)
                .json(err);
                return;
            }
            res
            .status(204)
            .json(null);
        });
    }else{
        res
        .status(404)
        .json({"message":"No recipeid"});
    }
};

module.exports = {
    getRecipes,
    createRecipe,
    getSingleRecipe,
    updateRecipe,
    deleteRecipe
};