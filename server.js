const express=require("express");
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const app=express();

const buyerRoute=require("./routes/buyerRoutes/buyerBasicRoutes");
const orderRoute=require("./routes/orderRoutes/orderBasicRoutes");
const productRoute=require("./routes/productRoutes/productBasicRoutes");


const cors = require("cors");

//Connecting to database
mongoose.Promise = global.Promise;
// connect your database here
mongoose.connect("", { 'useMongoClient': true })
    .then(() => console.log("Connected to productsBE..."))
    
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use('/buyer',buyerRoute);
app.use('/order',orderRoute);
app.use('/product',productRoute);


app.listen(3000,function(err){
    if(err){
        console.log("Error occured ");
    }
    else{
        console.log("productsBE running ");
    }
});