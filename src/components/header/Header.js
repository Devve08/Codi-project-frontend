import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="header-container">
        <div className="header-container__search">
          {/* <div>
              <Icon icon="search" size={20} />
            </div> */}
          <div className="input_div">
            <input
              type="search"
              className="header-container__search--input"
              placeholder="Search"
            />
          </div>
        </div>
        <div className="header-container__logo">
          <h1 className="header-container__logo--h1">
            <div className="logo_name">BRANDS</div>
            <span className="logo_span">WEAR</span>
          </h1>
        </div>
        <div className="header-container__cart">
          <Link to="/login">
            <button className="header-container__cart--btn-login">Login</button>
          </Link>
          <button className="header-container__cart--btn-cart">
            Cart <i class="far fa-shopping-cart"></i>
          </button>
        </div>
      </div>
      <div className="header__navbar">
        <ul className="header__navbar--ul">
          <li>
            <Link className="link" to="/">
              <i class="far fa-home"></i>
              Home
            </Link>
          </li>
          <li>
            <Link className="link" to="/shopmen">
              <i class="far fa-male"></i>
              Shop Men
            </Link>
          </li>
          <li>
            <Link className="link" to="/shopwomen">
              <i class="far fa-female"></i>
              Shop Women
            </Link>
          </li>
          <li>
            <Link className="link" to="/sale">
              <i class="far fa-tags"></i>
              Sale
            </Link>
          </li>
          <li>
            <Link className="link" to="/contactus">
              <i class="far fa-file-signature"></i>
              Contact us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
