import React from "react";
import "./SignIn.css";
import { Link } from "react-router-dom";

function SignIn() {
  return (
    <>
      <div className="main__form__sign-in">
        <form action="" className="form__sign-in">
          <div>
            <h1>Sign-in</h1>
          </div>
          <div className="form__email">
            <label for="email">Email</label>
            <input type="text" name="email" id="email" />
          </div>
          <div className="form__password">
            <label for="password__sign-in">Password</label>
            <input
              type="password"
              name="password__sign-in"
              id="password__sign-in"
            />
          </div>
          <button className="form__btn">Sign-in</button>
        </form>
        <div className="main__form__forgot-password">
          <a href="#">Forgot your password?</a>
        </div>
        <div className="main__form__sign-up">
          <h1 className="main__form__sign-up--text">Sign-up now for free!!</h1>
          <Link className="main__form__sign-up--btn" to="/shopmen">
            {/* <button className="main__form__sign-up--btn">Sign-up</button> */}
            {/* sign-up */}
          </Link>
        </div>
      </div>
    </>
  );
}

export default SignIn;
