import Nav from "./Nav";

const Header = ({handleSidebar}) => {
  return (
    <header id="headerSection">
      <div className="container">
        <div className="header">
          <div className="logo">
            <h2>BurgerMantri</h2>
          </div>
          <Nav handleSidebar={handleSidebar} />
        </div>
      </div>
    </header>
  );
};

export default Header;
