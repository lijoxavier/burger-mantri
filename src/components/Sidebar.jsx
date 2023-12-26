import { IoIosCloseCircle } from "react-icons/io";

const Sidebar = ({ handleSidebar }) => {
  return (
    <div id="sidebar">
      <div className="cart">
        <div className="cartHead">
          <div>
            <h2>Shopping Cart</h2>
            <p>5 items in your cart</p>
          </div>
          <div onClick={handleSidebar} className="cartClose">
            <IoIosCloseCircle color="#F59E0B" size={36} />
          </div>
        </div>
        <div className="cartBody">
          <div className="cartItem">
            <div>
              <img
                src="https://www.svgrepo.com/show/13658/error.svg"
                alt=""
                width="16"
              />
            </div>
            <img
              src="https://i.ibb.co/xh2mQfG/burg6.png"
              alt=""
              width="48"
              height="48"
            />
            <div className="cartContent">
              <h2>Mega Burger</h2>
              <p>$15</p>
            </div>
            <input
              className="cartInput"
              type="number"
              placeholder="2"
              min="0"
            />
          </div>
          <div className="cartItem">
            <div>
              <img
                src="https://www.svgrepo.com/show/13658/error.svg"
                alt=""
                width="16"
              />
            </div>
            <img
              src="https://i.ibb.co/xh2mQfG/burg6.png"
              alt=""
              width="48"
              height="48"
            />
            <div className="cartContent">
              <h2>Cheese Burger</h2>
              <p>$12</p>
            </div>
            <input
              className="cartInput"
              type="number"
              placeholder="2"
              min="0"
            />
          </div>
          <div className="cartItem">
            <div>
              <img
                src="https://www.svgrepo.com/show/13658/error.svg"
                alt=""
                width="16"
              />
            </div>
            <img
              src="https://i.ibb.co/xh2mQfG/burg6.png"
              alt=""
              width="48"
              height="48"
            />
            <div className="cartContent">
              <h2>Mega Burger</h2>
              <p>$15</p>
            </div>
            <input
              className="cartInput"
              type="number"
              placeholder="2"
              min="0"
            />
          </div>
        </div>
        <div className="cartFooter"></div>
      </div>
    </div>
  );
};

export default Sidebar;
