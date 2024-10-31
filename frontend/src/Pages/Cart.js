import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";


export default function Cart({cartItem,setCartItem}){
    // console.log(cartItem.length)
    const [complete,setComplete] = useState(false);

    //Increment logic
    const incrementHandler=(item)=>{
        if(item.product.stock==item.qty){
            return;
        }
        //Increment Logic ,i mean currentCartItem
        const updatedCart = cartItem.map((i)=>{
            if(i.product._id==item.product._id){
                i.qty++;
            }
            return i;
        })
        setCartItem(updatedCart);
    }

    //Decrement logic
    const DecrementHandler =(item)=>{
        if(item.qty>1){
            const updatedCart = cartItem.map((i)=>{
                if(i.product._id==item.product._id){
                    i.qty--;
                }
                return i;
            })
            setCartItem(updatedCart);
        }
        
        

    }

    //Trash Logic
    const removeHandler=(item)=>{
       
        const updatedCart=cartItem.filter((i)=>{
            if(i.product._id !== item.product._id){
                return true;
            }
        })
        setCartItem(updatedCart);
    }

    //Order API
    function Order(){
        fetch(process.env.REACT_APP_API_URL+"/order",{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(cartItem)
        })
        .then(()=>{
            setCartItem([]);
            setComplete(true);
            toast.success("Order completed!");
        }           
        )
    }


    return(
        
            
        cartItem.length>0?
        <Fragment>
        <div className="container container-fluid">
        <h2 className="mt-5">Your Cart: <b>{cartItem.length} items</b></h2>
        
        <div className="row d-flex justify-content-between">
            <div className="col-12 col-lg-8">
                <hr />
                {
                    cartItem.map((item)=>(
                        <div className="cart-item">
                    <div className="row">
                        <div className="col-4 col-lg-3">
                            <img src={item.product.images[0].image} alt={item.product.name} height="90" width="115"/>
                        </div>

                        <div className="col-5 col-lg-3">
                            <Link to={"/product/"+item.product._id}>{item.product.name}</Link>
                           
                        </div>


                        <div className="col-4 col-lg-2 mt-4 mt-lg-0">
                            <p id="card_item_price">{item.product.price}</p>
                        </div>

                        <div className="col-4 col-lg-3 mt-4 mt-lg-0">
                            <div className="stockCounter d-inline">
                                <span className="btn btn-danger minus" onClick={()=>DecrementHandler(item)}>-</span>
                                <input type="number" className="form-control count d-inline" value={item.qty} readOnly />

								<span className="btn btn-primary plus" onClick={()=>incrementHandler(item)}>+</span>
                            </div>
                        </div>

                        <div className="col-4 col-lg-1 mt-4 mt-lg-0">
                            <i id="delete_cart_item" className="fa fa-trash btn btn-danger" onClick={()=>removeHandler(item)}></i>
                        </div>

                    </div>
                </div>
                    ))
                }
                
                <hr />
            </div>

            <div className="col-12 col-lg-3 my-4">
                <div id="order_summary">
                    <h4>Order Summary</h4>
                    <hr />
                    <p>Subtotal:  <span className="order-summary-values">{cartItem.reduce((acc,item)=>(acc+item.qty),0)} (Units)</span></p>
                    <p>Est. total: <span className="order-summary-values">${Number(cartItem.reduce((acc,item)=>(acc+(item.qty*item.product.price)),0)).toFixed(2)}</span></p>
    
                    <hr />
                    <button id="checkout_btn" className="btn btn-primary btn-block" onClick={Order}>Place Order</button>
                </div>
            </div>
        </div>
    </div>
    </Fragment>
    :
    (!complete ? <h2 className=" mt-5 text-center">Your cart is empty</h2> 
        :
        <Fragment>
            <h2 className=" mt-5 text-center">Order success</h2>
            <p>Your order has been Successfully placed</p>
        </Fragment>
    )
   
    

    )

}