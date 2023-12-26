import { IoIosCloseCircle } from "react-icons/io";
import CartItem from "./CartItem";
import { USDformat } from "../utils/format";

const Sidebar = ({ handleSidebar, cart, deleteItemInCart, addToCart, removeCartItem, count, total }) => {
  return (
    <div id="sidebar">
      <div className="cart">
        <div className="cartHead">
          <div>
            <h2>Shopping Cart</h2>
            <p>{count} items in your cart</p>
          </div>
          <div onClick={handleSidebar} className="cartClose">
            <IoIosCloseCircle color="#F59E0B" size={36} />
          </div>
        </div>
        <div className="cartBody">
        {
          cart.map((item)=>{
            return <CartItem key={item.id} cartItem={item} 
            deleteItemInCart={deleteItemInCart} 
            addToCart={addToCart} 
            removeCartItem={removeCartItem}
             
           
            />
          })
        }
          
        </div>
        
        <div className="cartFooter" style={{ textAlign: 'center', fontWeight: "bold" }}>{count > 0 && `Total Items in cart ${USDformat(Math.floor(total))}`}</div>
      </div>
    </div>
  );
};

export default Sidebar;
