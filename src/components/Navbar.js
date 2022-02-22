import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar_text">
        <div className="logo">
          <h4>Rashidi</h4>
        </div>
        <ul className="navbar-ul">
          <li>
            <a href="">خانه</a>
          </li>
          <li>
            <a href="">منو لیست</a>
          </li>
          <li>
            <a href="">مغازه</a>
          </li>
          <li>
            <a href="">خانه</a>
          </li>
          <li>
            <a href="">خبرها</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
