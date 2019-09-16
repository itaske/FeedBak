var express = require('express');
var router = express.Router();
const Review=require("../models/database/Review");

/* GET users listing. */
router.get('/', function(req, res, next) {

    console.log("Started review");
    let reviews=Review.reviews;

        res.render("review.ejs",{reviews:reviews,productId:req.query.id});
        next();

});

module.exports = router;
