import React from "react";
import "./Register.css";

function Register() {
  return (
    <>
      <div className="main__form__sign-up">
        <form action="" className="form__sign-up">
          <div>
            <h1>Sign-up</h1>
          </div>
          <div className="form__full-name form__input">
            <label for="full-name">Full name</label>
            <input type="text" name="full-name" id="full-name" />
          </div>
          <div className="form__username form__input">
            <label for="username">Username</label>
            <input type="text" name="username" id="username" />
          </div>
          <div className="form__email form__input">
            <label for="email">Email</label>
            <input type="text" name="email" id="email" />
          </div>
          <div className="form_age form__input">
            <label for="age">Age</label>
            <input type="date" name="age" id="age" />
          </div>
          {/* <div className="form__gender">
            <h2>Gender</h2>
            <div className="form__gender__radios">
              <div>
                <input type="radio" name="male" id="male" />
                <label for="male">Male</label>
              </div>
              <div>
                <input type="radio" name="female" id="female" />
                <label for="female">Female</label>
              </div>
            </div>
          </div> */}
          <div className="form__address form__input">
            <label for="address">Password</label>
            <input type="text" name="address" id="address" />
          </div>
          <div className="form__phone form__input">
            <label for="phone">Password</label>
            <input type="tel" name="phone" id="phone" />
          </div>
          <div className="form__password form__input">
            <label for="password__new">Password</label>
            <input type="password" name="password__new" id="password__new" />
          </div>
          <div className="form__password form__input">
            <label for="password__confirm">Confirm your password</label>
            <input
              type="password"
              name="password__confirm"
              id="password__confirm"
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default Register;
