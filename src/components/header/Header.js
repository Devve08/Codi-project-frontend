import React, { useEffect, useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Signin from "../../pages/Signin";

function Header(props) {
  const [loginPage, setLoginPage] = useState(false);

  const [logged, setLogged] = useState("Login");

  return (
    <div className="header">
      <div className="header-container">
        <div className="header-container__search">
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
          <button
            className="header-container__cart--btn-login"
            onClick={() => setLoginPage(true)}
          >
            {logged}
          </button>
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
      <Signin
        loginPage={loginPage}
        setLoginPage={setLoginPage}
        setLogged={setLogged}
      />
    </div>
  );
}

export default Header;
