const Nav = ({ handleSidebar }) => {
  return (
    <nav className="menu">
      <div onClick={handleSidebar} className="menuItem cartOpen">
        Cart
      </div>
    </nav>
  );
};

export default Nav;
