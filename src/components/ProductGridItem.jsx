import { FaStar } from "react-icons/fa";
import { USDformat } from "../utils/format";
import { useContext } from "react";
import  {AppContext}  from "../context/AppContext";

const ProductGridItem = ({ data}) => {
  const { id, image, title, description, rating, price} = data;
  
  const {state,dispatch} = useContext(AppContext)

  // const itemInCart = cart.findIndex((item)=>item.id === id)
  const itemInCart = state.cart.findIndex((item)=>item.id === id)

  const addToCart=(productObject)=>{
    if(itemInCart > -1){
      dispatch({
        type:"CHANGE_QUANTITY",
        payload:{id,num:1}
      })

    } else {
      dispatch({
        type:"ADD_TO_CART",
        payload:{...productObject,quantity:1}
      })
    }
      
    }

  return (
    <div className="productGridItem">

      <img src={image} alt="" />

      <div className="itemContent">
        <h2>{title}</h2>
        <p className="rating">
          <FaStar color="#F59E0B"/>
          <span>{rating}</span>
        </p>
        <p>
          {description}
        </p>
        <div className="itemMeta">
          <div className="itemPrice">{USDformat(price)}</div>
          <div className="btn" onClick={()=>addToCart(data)} >{itemInCart > -1 ? 'Added' : 'Add'} to Cart</div>
        </div>
      </div>
    </div>
  );
};

export default ProductGridItem;
