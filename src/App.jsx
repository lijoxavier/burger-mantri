import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";
import Sidebar from "./components/Sidebar";

const App = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const handleSidebar = () => {
    setShowSidebar((prev) => !prev);
  };
  return (
    <div id="app">
      <Header handleSidebar={handleSidebar} />
      <Hero />
      <ProductGrid />
      <Footer />
      {showSidebar && <Sidebar handleSidebar={handleSidebar} />}
    </div>
  );
};

export default App;
