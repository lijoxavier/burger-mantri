const Nav = ({ handleSidebar, count }) => {
  return (
    <nav className="menu">
      <div onClick={handleSidebar} className="menuItem cartOpen">
        Cart - {count}
      </div>
    </nav>
  );
};

export default Nav;
