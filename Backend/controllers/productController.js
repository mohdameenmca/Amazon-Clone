const Product = require("../Model/ProductModel")

exports.getProduct = async(req,res,next)=>{
    const query=req.query.keyword ? {name:{
        $regex:req.query.keyword,
        $options:'i'
    }
}:{}
    try{
   const products = await Product.find(query);
    res.json({
        
        sucess:true,
        products
    })
    }
    catch(err){
        res.json({
            sucess:false,
            message:err.message
        })
    }
}

exports.getSingleProduct =async (req,res,next)=>{
    
    try{
       
        const product = await Product.findById(req.params.id);
        res.json({
        
            sucess:true,
            product
        })
    }
    catch(error){
        res.status(404).json({
            sucess:false,
            message:"Data Not found"
        })
    }
   
}