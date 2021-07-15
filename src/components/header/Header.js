import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Signin from "../signIn/Signin"
import { ProductContext } from "../../contexts/ProductContext";

function Header() {
  // const loginToggle = () => {
  //   const userForm = document.querySelector(".main__form");
  //   if (userForm.classList.contains("display__none")) {
  //     userForm.classList.add("display__block");
  //     userForm.classList.remove("display__none");
  //   } else {
  //     userForm.classList.add("display__none");
  //     userForm.classList.remove("display__block");
  //   }
  // };

  const [test, setTest] = useState(false);
  const { value2 } = React.useContext(ProductContext);
  const [cart] = value2;
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
          {/* <Link to="/login"> */}
          <button
            className="header-container__cart--btn-login"
            onClick={() => setTest(true)}
          >
            Login
          </button>
          <div className="btn_cart_counter">
            <button className="header-container__cart--btn-cart">
              <Link className="link" to="/cart">
                Cart <i className="far fa-shopping-cart"></i>
              </Link>
            </button>
            <div className="span_cart_counter">
              <span>{cart && cart.length}</span>
            </div>
          </div>
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
      <Signin trigger={test} setTrigger={setTest} />
    </div>
  );
}

export default Header;
