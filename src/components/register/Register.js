import React, { useState } from "react";
import "./Register.css";
import Axios from "axios";

function Register(props) {
  const [errorMessage, setErrorMessage] = useState(false);
  const [form, setForm] = useState({
    usernameReg: "",
    passwordReg: "",
    nameReg: "",
    emailReg: "",
    addressReg: "",
    phoneReg: "",
  });

  const register = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:4000/user/add", {
      name: form.nameReg,
      username: form.usernameReg,
      password: form.passwordReg,
      email: form.emailReg,
      address: form.addressReg,
      phone: form.phoneReg,
    })
      .then((res) => {
        setErrorMessage("Your " + res.data.error + " already exist");
        console.log(res.data.error);
        props.setLogged(res.data.data[0].username);
        console.log(res.data.data[0].username);
        props.triggerHandler(false);
        props.setLoginPage(false);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const insertForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return props.signUpTrigger ? (
    <>
      <div className="main__form__sign-up">
        <div
          className="main__form__sign-up__go-back"
          onClick={() => props.triggerHandler()}
        >
          <i className="fas fa-arrow-left"></i>
        </div>
        <form action="" className="form__sign-up">
          <div>
            <h1>Sign-up</h1>
          </div>
          <div className="form__full-name form__input">
            <label for="full-name">Full name</label>
            <input
              type="text"
              name="nameReg"
              id="full-name"
              onChange={(e) => insertForm(e)}
            />
          </div>
          <div className="form__username form__input">
            <label for="username">Username</label>
            <input
              type="text"
              name="usernameReg"
              id="username"
              onChange={(e) => insertForm(e)}
            />
          </div>
          <div className="form__email form__input">
            <label for="email">Email</label>
            <input
              type="text"
              name="emailReg"
              id="email"
              onChange={(e) => insertForm(e)}
            />
          </div>
          {/* <div className="form_age form__input">
            <label for="age">Age</label>
            <input type="date" name="age" id="age" value={form.age} onChange={update} />
          </div> */}
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
            <label for="address">address</label>
            <input
              type="text"
              name="addressReg"
              id="address"
              onChange={(e) => insertForm(e)}
            />
          </div>
          <div className="form__phone form__input">
            <label for="phone">Phone</label>
            <input
              type="tel"
              name="phoneReg"
              id="phone"
              onChange={(e) => insertForm(e)}
            />
          </div>
          <div className="form__password form__input">
            <label for="password__new">Password</label>
            <input type="password" name="password__new" id="password__new" />
          </div>
          <div className="form__password form__input">
            <label for="password__confirm">Confirm your password</label>
            <input
              type="password"
              name="passwordReg"
              id="password__confirm"
              onChange={(e) => insertForm(e)}
            />
          </div>
          <button onClick={register}>submit</button>
          {errorMessage && <h3 className="signUp__error">{errorMessage}</h3>}
        </form>
      </div>
    </>
  ) : (
    ""
  );
}

export default Register;
