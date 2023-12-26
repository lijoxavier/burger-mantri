import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";
import Sidebar from "./components/Sidebar";


const App = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [cart,setCart]=useState([])

  const count = cart.reduce((acc,curr)=>acc+curr.quantity,0)
  const total = cart.reduce((acc,curr)=>acc+curr.quantity * curr.price,0)

  const handleSidebar = () => {
    setShowSidebar((prev) => !prev);
  };

  const addToCart=(productObj)=>{
   const existingItemInCart=cart.findIndex((item)=>item.id === productObj.id)
   if(existingItemInCart > -1){
    setCart((prev)=>prev.map((item)=>{
      return item.id === productObj.id ? {...item,quantity:item.quantity+1} : item
    }))
   }
   else{
    setCart((prev)=>[...prev,{...productObj,quantity:1}])
   }

  }
  const deleteItemInCart=(itemId)=>{
    setCart((prev)=>prev.filter((item)=>{
      return item.id !==itemId
    }))
  }
  const removeCartItem=(itemId)=>{
    const itemInCart = cart.find((item)=>item.id === itemId)
    if(itemInCart.quantity >  1) {
      setCart((prev)=>prev.map((item)=>{
        return item.id === itemId ? {...item,quantity:item.quantity-1} : item
      }))
    }
    else{
      setCart((prev)=>prev.filter((item)=>{
        return item.id !==itemId
      }))
    }

  }
  console.log(cart);

  return (
    <div id="app">
      <Header handleSidebar={handleSidebar} count={count} />
      <Hero />
      <ProductGrid addToCart={addToCart} cart={cart} />
      <Footer />
      {showSidebar && <Sidebar 
      handleSidebar={handleSidebar}
      cart={cart}
        deleteItemInCart={deleteItemInCart}
        addToCart={addToCart}
        removeCartItem={removeCartItem}
        count={count}
        total={total}
       />}
    </div>
  );
};

export default App;
