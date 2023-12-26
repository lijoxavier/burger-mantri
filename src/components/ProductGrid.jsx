import { burgers } from "../../data";
import ProductGridItem from "./ProductGridItem";

const ProductGrid = () => {

  return (
    <main>
      <div className="container">
        <div className="productGrid">
            {
                burgers.map((burger) => {
                    return <ProductGridItem key={burger.id} data={burger} />
                })
            }
        </div>
      </div>
    </main>
  );
};

export default ProductGrid;
