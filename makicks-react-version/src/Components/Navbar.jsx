function Navbar() {
  return (
    <nav>
      <ul className="navBar">
        <li className="pointer navItems">
          <a href="shop.html#menSection" target="_blank">
            Men
          </a>
        </li>
        <li className="pointer navItems">
          <a href="shop.html#womenSection" target="_blank">
            Women
          </a>
        </li>
        <li className="pointer navItems">
          <a href="shop.html#childrenSection" target="_blank">
            Children
          </a>
        </li>
        <li className="pointer navItems">Running</li>
      </ul>
    </nav>
  );
}

export default Navbar;
