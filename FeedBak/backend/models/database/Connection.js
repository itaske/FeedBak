const mongoose=require("mongoose");
db=mongoose.connect("mongodb://127.0.0.1:27017/feedbak",function callback()
{
    console.log("connected");
});
module.exports=db;