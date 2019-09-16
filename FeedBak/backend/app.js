var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser=require("body-parser");
var indexRouter = require('./routes/index');
var reviewsRouter = require('./routes/reviews');
const reviewRouter=require('./routes/review');
const connection=require('./models/database/connection').db;
const Review =require("./models/database/Review");
var app = express();

app.use(logger('dev'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use("/review/assets",express.static(path.join(__dirname,'public')));
app.use(bodyParser.json());
app.use('/', indexRouter);
app.use('/reviews', reviewsRouter);
app.use("/review",reviewRouter);

app.all("/review/post",function (req,res,next)
{

    Review.Review.collection.insertOne({userName:req.body.userName,title:req.body.title,summary:req.body.summary,productId:req.body.productId})
        .then(res=>{

            console.log(res);
            console.log("Successful insertion");
        })
        .catch((err=>
        {
            console.log("Failed insertion");
        }));
    res.end("Successful Review");

}
);

module.exports = app;
