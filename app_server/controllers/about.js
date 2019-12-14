const about= function(req,res){
    res.render('about',{title: 'About My Delicious Recipes'});
};

module.exports = {
    about
};