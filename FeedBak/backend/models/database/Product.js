const mongoose=require('mongoose');

let productSchema= new mongoose.Schema(
{
    name:{type:String,default:"Product"},
    description:{type:String,default: " "},
    price:{type:Number,default:0},
    imgUrl:{type:String,default:" "},
    dateCreated:{type:Date,default:Date.now()}
});

let Product=mongoose.model("Product",productSchema);

const products=[
    {id:1,name:"Product 1",description:"This is product 1",price:500},
    {id:2,name:"Product 2",description:"Best product 2",price:300},
    {id:3,name:"Product 3",description:"Product 3 is limited Edition",price:200},
    {id:4,name:"Product 4",description:"4 is the best Product available",price:450},
    {id:5,name:"Product 5",description:"Product 5 is ready ",price:200},
    {id:6,name:"Product 6",description:"Best product",price:200},
    {id:7,name:"Product 7",description:"Best product",price:600},
    {id:8,name:"Product 8",description:"Best product",price:700},
    {id:9,name:"Product 9",description:"Best product",price:400},
    {id:10,name:"Product 10",description:"10 Best products",price:350}
];

var insertProducts=function()
{
    Product.collection.insertMany(products)
        .then(result=>
        {
            console.log("inserting objects");
            console.log(result);
        })
        .catch(err=>
        {
            console.log("error inserting objects");
            console.log(err);
        })
};
Product.find()
    .then((result)=>{
        module.exports.dbProducts=result;

    }).catch(err=>{
        console.log(err);
    });
module.exports=
    {
        Product: Product,
        products:products,
        insert: insertProducts
    };