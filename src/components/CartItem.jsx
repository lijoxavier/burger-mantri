import React from 'react'
import { USDformat } from '../utils/format';
import { FaSquareMinus, FaSquarePlus } from "react-icons/fa6";

const CartItem = ({ cartItem, deleteItemInCart, addToCart, removeCartItem, }) => {
    const { id, image, title, description, rating, price,quantity } = cartItem;
  return (
      <div className="cartItem">
          <div onClick={() => deleteItemInCart(id)}>
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
          <FaSquareMinus size={18} onClick={() => removeCartItem(id)}/>
          <span>{quantity}</span>
          <FaSquarePlus size={18} onClick={() => addToCart(cartItem)}/>
         
      </div>
  )
}

export default CartItem