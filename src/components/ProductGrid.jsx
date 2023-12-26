import { burgers } from "../../data";
import ProductGridItem from "./ProductGridItem";

const ProductGrid = ({ addToCart,cart }) => {

  return (
    <main>
      <div className="container">
        <div className="productGrid">
            {
                burgers.map((burger) => {
                  return <ProductGridItem key={burger.id} data={burger} addToCart={addToCart} cart={cart}/>
                })
            }
        </div>
      </div>
    </main>
  );
};

export default ProductGrid;
