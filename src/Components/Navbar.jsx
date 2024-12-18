import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import Header from "./Header";

const Navbar = () => {

  const [menu, setmenu] = useState(false);
  const menuhandler = () => {
    setmenu(!menu);
  };

  return (
    <>
      <Header />
      <div>
        <div className="navbar_div">
          <div className="navbar_main">

            <span className="my_shop1">
              My shop
            </span>
            <MenuIcon onClick={menuhandler} className="menu_icon" />
          </div>

          <div className="Nav_links">
            <Link to="/" className="link">
              Home
            </Link>
            <Link to="/contact" className="link">
              Contact
            </Link>
            <Link to="/loginform" className="link">
              Login
            </Link>
            <Link to="/signup" className="link">
              Signup
            </Link>
          </div>
          <div className={menu ? "sidebar2" : "sidebar1"}>
            <Link to="/" className="sidebar_link">
              Home
            </Link>
            <Link to="/contact" className="sidebar_link">
              Contact
            </Link>
            <Link to="/loginform" className="sidebar_link">
              Login
            </Link>
            <Link to="/signup" className="sidebar_link">
              Signup
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;