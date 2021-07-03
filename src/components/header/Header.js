import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="wrapper" id="wrapper">
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
            <button className="header-container__cart--btn-cart">Cart <i class="far fa-shopping-cart"></i></button>
          </div>
        </div>
        <div className="header__navbar">
          <ul className="header__navbar--ul">
            <li><i class="far fa-home"></i> <Link className='link' to='/'> Home </Link></li>
            <li><i class="far fa-male"></i> <Link className='link' to='/shopmen'> Shop Men</Link></li>
            <li><i class="far fa-female"></i> <Link className='link' to='/shopwomen'> Shop Women</Link></li>
            <li><i class="far fa-tags"></i> Sale</li>
            <li><i class="far fa-file-signature"></i> Contact us</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
