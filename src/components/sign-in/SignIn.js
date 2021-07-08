import React, { useState } from "react";
import "./SignIn.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Axios from "axios";
// import { response } from "express";

function SignIn() {
  const history = useHistory();

  const [usernameLog, setUsernameLog] = useState("");
  const [passwordLog, setPasswordLog] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const login = (e) => {
    Axios.post("http://localhost:4000/user/login", {
      username: usernameLog,
      password: passwordLog,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        setErrorMessage(e.message);
      });
    e.preventDefault();
  };

  return (
    <>
      <div className="main__form__sign-in">
        <div
          className="main__form__sign-in__exit"
          onClick={() => history.goBack()}
        >
          <i className="fas fa-times"></i>
        </div>
        <form action="" className="form__sign-in">
          <div>
            <h1>Sign-in</h1>
          </div>
          <div className="form__email">
            <label for="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              onChange={(e) => setUsernameLog(e.target.value)}
            />
          </div>
          <div className="form__password">
            <label for="password__sign-in">Password</label>
            <input
              type="password"
              name="password__sign-in"
              id="password__sign-in"
              onChange={(e) => setPasswordLog(e.target.value)}
            />
          </div>
          {errorMessage && <h3 className="error">{errorMessage}</h3>}
          <button className="form__btn" onClick={login}>
            Sign-in
          </button>
        </form>
        <div className="main__form__forgot-password">
          {/* <a href="#">Forgot your password?</a> */}
        </div>
        <div className="main__form__sign-up">
          <h1 className="main__form__sign-up--text">Sign-up now for free!!</h1>
          <Link className="main__form__sign-up--btn" to="/Register">
            <button className="main__form__sign-up--btn">Sign-up</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default SignIn;
