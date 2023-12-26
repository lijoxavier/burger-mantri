import Nav from "./Nav";

const Header = () => {
  return (
    <header id="headerSection">
      <div className="container">
        <div className="header">
          <div className="logo">
            <h2>BurgerMantri</h2>
          </div>
          <Nav  />
        </div>
      </div>
    </header>
  );
};

export default Header;
