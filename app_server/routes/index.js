var express = require('express');
var router = express.Router();
const ctrlAbout=require('../controllers/about');
const ctrlList=require('../controllers/list');

/* GET home page. */
router.get('/list',ctrlList.homelist);
router.get('/',function(req, res, next) {
  res.render('index', { title: 'My Delicious Recipes' });
});
router.get('/display', function(req, res, next) {
  res.render('display', { title: 'My Delicious Recipes' });
});


router.get('/about',ctrlAbout.about);
router.get('/recipes/:recipeid',ctrlList.recipeInfo);
router.route('/new')
        .get(ctrlList.addNewRecipe)
        .post(ctrlList.doAddNewRecipe);

/* UPDATE BOOK */
router.put('/:id', function(req, res, next) {
  Book.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


module.exports = router;
