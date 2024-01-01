import { useContext, useEffect } from "react";
import  {AppContext}  from "../context/AppContext";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Nav = () => {
// const {state,dispatch} = useContext(AppContext)
// const count = state.cart.reduce((acc,curr)=>acc+curr.quantity,0)
const state = useSelector(state => state.cart);
console.log(state);
//  useEffect(()=>{
//   dispatch({
//     type:"UPDATE_COUNT_TOTAL"
//   })
//  },[state.cart])
 
  const handleSidebar = () => {
    // dispatch({
    //   type: "TOGGLE_SIDEBAR"
    // })
  };
  return (
    <nav className="menu">
      {/* <div className="menuItem cartOpen" onClick={handleSidebar}>
        Cart - {state.count}
      </div> */}
      <NavLink to="/cart" className="menuItem">
        Cart {state.count >=1 && <span>:{state.count}</span>}
      </NavLink>
      <NavLink to="/about" className="menuItem">About</NavLink>
    </nav>
  );
};

export default Nav;
