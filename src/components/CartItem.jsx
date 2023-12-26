import React, { useContext } from 'react'
import { USDformat } from '../utils/format';
import { FaSquareMinus, FaSquarePlus } from "react-icons/fa6";
import { AppContext } from '../context/appContext';

const CartItem = ({ cartItem }) => {
    const {state,dispatch} = useContext(AppContext)
    const { id, image, title, description, rating, price,quantity } = cartItem;

    const removeCartItem=()=>{
        const itemInCart = state.cart.find((item)=>item.id === id)
        // console.log(itemInCart.quantity,"==itemInCart quantity");
    
        if(itemInCart.quantity > 1){
            dispatch({
                type:"CHANGE_QUANTITY",
                payload:{id,num:-1}
            })
        }
        else{
            dispatch({
                type:"REMOVE_FROM_CART",
                payload:id
            })
        }
    }
  return (
      <div className="cartItem">
          <div onClick={()=>dispatch({type:"REMOVE_FROM_CART",payload:id})}>
              <img
                  src="https://www.svgrepo.com/show/13658/error.svg"
                  alt=""
                  width="16"
              />
          </div>
          <img
              src={image}
              alt=""
              width="48"
              height="48"
          />
          <div className="cartContent">
              <h2>{title}</h2>
              <p>{USDformat(price)}</p>
          </div>
          <FaSquareMinus size={18} onClick={removeCartItem}/>
          <span>{quantity}</span>
          <FaSquarePlus size={18} onClick={()=>dispatch({type:"CHANGE_QUANTITY",payload:{id,num:1}})}/>
         
      </div>
  )
}

export default CartItem