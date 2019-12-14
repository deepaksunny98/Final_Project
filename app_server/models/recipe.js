const mongoose = require('mongoose');
const currentRecipe = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    author:
    {
        type: String,
        required: true
    },
    ingredients:
    {
        type: String,
        required: true
    },
    cookingTime:
    {
        type: Number,
        'default': 0,
        min: 10,
        max: 60
    },
    rating:
    {
        type: Number,
        'default':0,
        min: 0,
        max: 5
    }
});

module.exports = mongoose.model('recipe',currentRecipe, 'recipe');