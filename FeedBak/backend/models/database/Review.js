const mongoose=require("mongoose");

let reviewScheme=new mongoose.Schema(
    {
       userName:{type:String,default:""},
        title:{type:String,default:""},
       summary:{type:String,default:""},
        productId:{type:mongoose.Schema.ObjectId}

    }
);

var Review=mongoose.model("Reviews",reviewScheme);


Review.find()
    .then(result=>
    {
        module.exports.reviews=result;

    })
    .catch(err=>{
        console.log(err);
    });
module.exports={
    Review:Review
};