import Nav from "./Nav";

const Header = ({ handleSidebar, count }) => {
  return (
    <header id="headerSection">
      <div className="container">
        <div className="header">
          <div className="logo">
            <h2>BurgerMantri</h2>
          </div>
          <Nav handleSidebar={handleSidebar} count = {count} />
        </div>
      </div>
    </header>
  );
};

export default Header;
