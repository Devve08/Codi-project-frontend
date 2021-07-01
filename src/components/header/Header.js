import React from "react";
import "./Header.css";
import Logo from "../../images/image.jpg";
// import Icon from "../../icon";

function Header() {
  return (
    <div className="wrapper" id="wrapper">
      <div className="header">
        <div className="header-container">
          <div className="header-container__search">
            {/* <div>
              <Icon icon="search" size={20} />
            </div> */}
            <div>
              <input
                type="text"
                className="header-container__search--input"
                placeholder="Search"
              />
            </div>
          </div>
          <div className="header-container__logo">
            <img src={Logo} alt="" className="header-container__logo--image" />
          </div>
          <div className="header-container__cart">
            <button className="header-container__cart--btn-login">Login</button>
            <button className="header-container__cart--btn-cart">Cart</button>
          </div>
        </div>
        <div className="header__navbar">
          <ul className="header__navbar--ul">
            <li>Home</li>
            <li>Shop Men</li>
            <li>Shop Women</li>
            <li>Sale</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
