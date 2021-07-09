import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header(props) {
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
          <button className="header-container__cart--btn-login">Login</button>
          <button className="header-container__cart--btn-cart">
            <Link className="link" to="/cart">
            Cart <i className="far fa-shopping-cart"></i> {props.cart}
            </Link>
            
          </button>
        </div>
      </div>
      <div className="header__navbar">
        <ul className="header__navbar--ul">
          <li>
            <Link className="link" to="/">
              <i className="far fa-home"></i>
              Home
            </Link>
          </li>
          <li>
            <Link className="link" to="/shopmen">
              <i className="far fa-male"></i>
              Shop Men
            </Link>
          </li>
          <li>
            <Link className="link" to="/shopwomen">
              <i className="far fa-female"></i>
              Shop Women
            </Link>
          </li>
          <li>
            <Link className="link" to="/sale">
              <i className="far fa-tags"></i>
              Sale
            </Link>
          </li>
          <li>
            <Link className="link" to="/contactus">
              <i className="far fa-file-signature"></i>
              Contact us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
