var express = require('express');
var router = express.Router();
const Product=require("../models/database/Product");
const Review=require("../models/database/Review");

/*
const reviews=[{id:1,title:"Review 1",summary:"This is review 1"},{id:2,title:"Review 2",summary:"This is review 3"}
    ,{id:1,title:"Review 1",summary:"This is review 1"},{id:1,title:"Review 1",summary:"This is review 1"},{id:1,title:"Review 1",summary:"This is review 1"},{id:1,title:"Review 1",summary:"This is review 1"}
    ,{id:1,title:"Review 1",summary:"This is review 1"},{id:1,title:"Review 1",summary:"This is review 1"}];
*/


/* GET home page. */
router.get('/', function(req, res, next) {
    let products=Product.products;
    let reviews=Review.reviews;
     if(reviews===undefined)
         reviews=[];
    res.render('index.ejs',{reviews:reviews, products:products});

  next();
});

module.exports = router;
