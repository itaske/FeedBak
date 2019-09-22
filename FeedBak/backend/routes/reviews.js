var express = require('express');
var router = express.Router();
const Review=require("../models/database/Review");





/* GET users listing. */
router.get('/', function(req, res, next) {
    let reviews=Review.reviews;
    if(reviews===undefined)
        reviews=[];
   res.render("reviews.ejs",{reviews:reviews});
    next();

});

module.exports = router;
