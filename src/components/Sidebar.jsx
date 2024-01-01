import { IoIosCloseCircle } from "react-icons/io";
import CartItem from "./CartItem";
import { USDformat } from "../utils/format";
import { useContext, useEffect } from "react";
import  {AppContext}  from "../context/AppContext";

const Sidebar = () => {
  const {state,dispatch} = useContext(AppContext)
  // const total = state.cart.reduce((acc,curr)=>acc+(curr.quantity * curr.price),0)
  // const count =  state.cart.reduce((acc,curr)=>acc+curr.quantity,0)
  // console.log(total);

  useEffect(()=>{
    dispatch({
      type:"UPDATE_COUNT_TOTAL"
    })
  },[state.cart])

  return (
    <div id="sidebar">
      <div className="cart">
        <div className="cartHead">
          <div>
            <h2>Shopping Cart</h2>
            <p>{state.count} items in your cart</p>
          </div>
          <div  className="cartClose" onClick={()=>dispatch({type:"TOGGLE_SIDEBAR"})}>
            <IoIosCloseCircle color="#F59E0B" size={36} />
          </div>
        </div>
        <div className="cartBody">
        {
          state.cart.map((item)=>{
            return <CartItem key={item.id} cartItem={item} 
            
             
           
            />
          })
        }
          
        </div>
        
        <div className="cartFooter" style={{ textAlign: 'center', fontWeight: "bold" }}>{state.count > 0 && `Total Items in cart ${USDformat(state.total)}`}</div>
      </div>
    </div>
  );
};

export default Sidebar;
