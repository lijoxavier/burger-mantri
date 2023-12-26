import { useContext, useEffect } from "react";
import  {AppContext}  from "../context/AppContext";

const Nav = () => {
const {state,dispatch} = useContext(AppContext)
// const count = state.cart.reduce((acc,curr)=>acc+curr.quantity,0)

 useEffect(()=>{
  dispatch({
    type:"UPDATE_COUNT_TOTAL"
  })
 },[state.cart])
 
  const handleSidebar = () => {
    dispatch({
      type: "TOGGLE_SIDEBAR"
    })
  };
  return (
    <nav className="menu">
      <div className="menuItem cartOpen" onClick={handleSidebar}>
        Cart - {state.count}
      </div>
    </nav>
  );
};

export default Nav;
