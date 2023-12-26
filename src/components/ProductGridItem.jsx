import { FaStar } from "react-icons/fa";
import { USDformat } from "../utils/format";

const ProductGridItem = ({ data, addToCart,cart }) => {
  const { id, image, title, description, rating, price,  } = data;
  
  const itemInCart = cart.findIndex((item)=>item.id === id)

  return (
    <div className="productGridItem">

      <img src={image} alt="" />

      <div className="itemContent">
        <h2>{title}</h2>
        <p className="rating">
          <FaStar color="#F59E0B"/>
          <span>{rating}</span>
        </p>
        <p>
          {description}
        </p>
        <div className="itemMeta">
          <div className="itemPrice">{USDformat(price)}</div>
          <div className="btn" onClick={() => addToCart(data)} >{itemInCart > -1 ? 'Added' : 'Add'} to Cart</div>
        </div>
      </div>
    </div>
  );
};

export default ProductGridItem;
