const orderModel = require("../Model/orderModel")
const productModel = require("../Model/ProductModel")

exports.postOrder= async(req,res,next)=>{
    const cardItem=req.body;
    const amount=cardItem.reduce((acc,item)=>Number(acc+item.product.price*item.qty),0).toFixed(2);
    const status="Pending"

   
   try{
    const order = await orderModel.create({cardItem,amount,status})
     //Updating stock qty details 
     cardItem.forEach(async(item)=>{
        const product = await productModel.findById(item.product._id);
        product.stock= product.stock - item.qty;
        await product.save();
    })
    

    
    res.json({
        success:true,
        order
    })
    }
    catch(err){
        res.json({
            success:false,
            message:err.message
        })
    }
}

