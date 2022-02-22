import React from "react";

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 z-10 w-full">
      <div className="flex h-16 items-center my-0 mx-5 w-[1200]">
        <div className="w-2/3 text-aliceblue">
          <h4>Rashidi</h4>
        </div>
        <ul className="h-3/5 list-none flex justify-end items-center navbar_ul">
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
