import React,{useContext} from 'react'
import { FaStar } from 'react-icons/fa6';
import { useLoaderData } from 'react-router-dom'
import { USDformat } from '../utils/format';
import { AppContext } from '../context/AppContext';
import { addToCart, updateQuantity } from '../store/slices/cart';
import { useDispatch, useSelector } from 'react-redux';

const Product = () => {
    const data = useLoaderData();
    // const {state,dispatch} = useContext(AppContext);
    const state = useSelector(state=> state.cart);
    const dispatch = useDispatch();
    const {id,title,image,description,price,reviews,rating} = data;

    const itemInCart = state.cart.findIndex((item) => item.id === id);

     const addItemToCart = (productObject) => {
       if (itemInCart > -1) {
        //  dispatch({
        //    type: 'CHANGE_QUANTITY',
        //    payload: { id, num: 1 },
        //  });
        dispatch(updateQuantity({id,num:1}))
       } else {
        //  dispatch({
        //    type: 'ADD_TO_CART',
        //    payload: { ...productObject, quantity: 1 },
        //  });

        dispatch(addToCart({...productObject,quantity:1}))

      }
     };
  return (
    <div id="productSection">
      <div className="container">
        <div className="productPage">
          <div className="productContent">
            <div className="productImg">
              <img src={image} alt="image" />
            </div>

            <div className="productInfo">
              <h1>{title}</h1>
              <div className="rating">
                <FaStar color="#F59E0B" />
                <span>{rating}</span>
              </div>
              <p>{description}</p>
              <div className="itemPrice">{USDformat(price)}</div>
              <div className="btn" onClick={() => addItemToCart(data)}>
                {itemInCart > -1 ? 'Added' : 'Add'} to Cart
              </div>
            </div>
          </div>

          <div className="productReviews">
            <h2>Burger Reviews</h2>
            {reviews.map((item) => {
              return (
                <div key={item.id}>
                  <p>
                    {item.content} - <span>{item.username}</span>
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product


export const productLoader = async({params})=>{
    const {id} = params;
    return await fetch(`https://burgermantri.onrender.com/data/${id}`);
}