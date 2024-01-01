import { FaStar } from "react-icons/fa";
import { USDformat } from "../utils/format";
import { useContext } from "react";
import  {AppContext}  from "../context/AppContext";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, updateQuantity } from "../store/slices/cart";

const ProductGridItem = ({ data}) => {
  const { id, image, title, description, rating, price} = data;
  
  // const {state,dispatch} = useContext(AppContext)
  const state = useSelector(state => state.cart);
  const dispatch = useDispatch();

  // const itemInCart = cart.findIndex((item)=>item.id === id)
  const itemInCart = state.cart.findIndex((item)=>item.id === id)

  const addItemToCart=(productObject)=>{
    if(itemInCart > -1){
    //   dispatch({
    //     type:"CHANGE_QUANTITY",
    //     payload:{id,num:1}
    //   })

      dispatch(updateQuantity({id,num:1}))

    } else {
    //   dispatch({
    //     type:"ADD_TO_CART",
    //     payload:{...productObject,quantity:1}
    //   })

      dispatch(addToCart({...productObject,quantity:1}))

    }
      
    }

  return (
    <div className="productGridItem">
      <img src={image} alt="" />

      <div className="itemContent">
        <Link to={`/burger/${id}`}>
          <h2>{title}</h2>
        </Link>
        <p className="rating">
          <FaStar color="#F59E0B" />
          <span>{rating}</span>
        </p>
        <p>{description}</p>
        <div className="itemMeta">
          <div className="itemPrice">{USDformat(price)}</div>
          <div className="btn" onClick={() => addItemToCart(data)}>
            {itemInCart > -1 ? 'Added' : 'Add'} to Cart
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductGridItem;
