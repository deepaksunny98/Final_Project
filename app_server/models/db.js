const mongoose = require('mongoose');
const dbURI = 'mongodb+srv://deepak:deepak@cluster0-p6kgc.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(dbURI, {dbName:'recipeDB',useNewUrlParser: true},function(err){
    if(err)console.log(err);
    else console.log('connected');
});

require('./recipe');