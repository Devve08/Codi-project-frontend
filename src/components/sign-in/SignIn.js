import React, { useState } from "react";
import "./SignIn.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

function SignIn() {
  const history = useHistory();

  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");

  return (
    <>
      <div className="main__form__sign-in">
        <div class="main__form__sign-in__exit" onClick={() => history.goBack()}>
          <i class="fas fa-times"></i>
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
              onChange={(e) => setUsernameReg(e.target.value)}
            />
          </div>
          <div className="form__password">
            <label for="password__sign-in">Password</label>
            <input
              type="password"
              name="password__sign-in"
              id="password__sign-in"
              onChange={(e) => setPasswordReg(e.target.value)}
            />
          </div>
          <button className="form__btn">Sign-in</button>
        </form>
        <div className="main__form__forgot-password">
          <a href="#">Forgot your password?</a>
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
