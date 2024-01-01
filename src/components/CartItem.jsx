import React, { useContext } from 'react'
import { USDformat } from '../utils/format';
import { FaSquareMinus, FaSquarePlus } from "react-icons/fa6";
import { AppContext } from '../context/AppContext';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, deleteProduct, updateQuantity } from '../store/slices/cart';

const CartItem = ({ data }) => {
    // const {state,dispatch} = useContext(AppContext)
    const { id, image, title, description, rating, price,quantity } = data;
    const state = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const removeCartItem=()=>{
        const itemInCart = state.cart.find((item)=>item.id === id)
        // console.log(itemInCart.quantity,"==itemInCart quantity");
    
        if(itemInCart.quantity > 1){
            // dispatch({
            //     type:"CHANGE_QUANTITY",
            //     payload:{id,num:-1}
            // })
            dispatch(updateQuantity({id,num:-1}))

        }
        else{
            // dispatch({
            //     type:"REMOVE_FROM_CART",
            //     payload:id
            // })
            dispatch(deleteProduct(id))
        }
    }
  return (
    <div className="cartItem">
      <img src={image} alt="" width="48" height="48" />
      <div className="cartContent">
          <h2>{title}</h2>
        <p>{USDformat(price)}</p>
      </div>
      <FaSquareMinus size={18} onClick={removeCartItem} />
      <span>{quantity}</span>
      <FaSquarePlus
        size={18}
        onClick={()=>dispatch(updateQuantity({id,num:1}))}
        // onClick={() =>
        //   dispatch({ type: 'CHANGE_QUANTITY', payload: { id, num: 1 } })
        // }
      />
      <div
        // onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: id })}
        style={{ display: 'flex', justifyContent: 'flex-end', flexGrow: '1' }}
        onClick={()=>dispatch(deleteProduct(id))}
      >
        <img
          src="https://www.svgrepo.com/show/13658/error.svg"
          alt=""
          width="16"
        />
      </div>
    </div>
  );
}

export default CartItem