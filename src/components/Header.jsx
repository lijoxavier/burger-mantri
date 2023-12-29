import { NavLink } from "react-router-dom";
import Nav from "./Nav";

const Header = () => {
  return (
    <header id="headerSection">
      <div className="container">
        <div className="header">
          <div className="logo">
            <NavLink to="/">
              <h2>BurgerMantri</h2>
            </NavLink>
          </div>
          <Nav />
        </div>
      </div>
    </header>
  );
};

export default Header;
