const express = require("express");
const dotenv=require("dotenv");
const path = require("path")
dotenv.config({path:path.join(__dirname,'config','config.env')});
const connectDB=require("./config/connectDB")
const cors = require("cors")
// const products = require('./routes/product');

// const order = require('./routes/order')

const products = require('./routes/product');
const orders = require('./routes/order');
connectDB();
const app=express()
app.use(cors());
app.use(express.json())
app.use('/api/v1',products);
app.use('/api/v1',orders);


app.listen(process.env.PORT,()=>{
    console.log(`Server is running on ${process.env.PORT} in ${process.env.NODE_ENV}`);
})