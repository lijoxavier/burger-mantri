import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import CartItem from '../components/CartItem';
import { USDformat } from '../utils/format';

const Cart = () => {
  const {state} = useContext(AppContext);
  console.log(state);
  return (
    <div className="cartSection">
      <div className="container">
        <div className="cartPage">
          <div className="cartPageTitle">Your Cart</div>
          {state.count > 0 ? (
            <>
              <div className="cartList">
                {state.cart.map((item) => {
                  return <CartItem key={item.id} data={item} />;
                })}
              </div>
              <div>
                <div className="cartFooter">
                  <div className='totalInfo'>Total {USDformat(state.total)}</div>
                  <div className='btn'>Checkout</div>
                </div>
              </div>
            </>
          ) : (
            <h2>No products in your cart. Add some.</h2>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart