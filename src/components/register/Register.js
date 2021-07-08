import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Register.css";
import Axios from "axios";

function Register() {
  const history = useHistory();

  // const [form, setFormInfo] = useState({
  //   usernameReg: "",
  //   passwordReg: "",
  //   nameReg: "",
  //   emailReg: "",
  //   addressReg: "",
  //   phoneReg: "",
  // });

  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [nameReg, setNameReg] = useState("");
  const [emailReg, setEmailReg] = useState("");
  const [addressReg, setAddressReg] = useState("");
  const [phoneReg, setPhoneReg] = useState("");

  const [errorMessage, setErrorMessage] = useState(null);

  const [test, setTest] = useState(null);

  const register = (e) => {
    Axios.post("http://localhost:4000/user/add", {
      name: nameReg,
      username: usernameReg,
      password: passwordReg,
      email: emailReg,
      address: addressReg,
      phone: phoneReg,
    })
      .then((response) => {
        console.log(response);
        setTest(response);
      })
      .catch((e) => {
        setErrorMessage(e.message);
      });
    e.preventDefault();
  };

  // const update = (e) => {
  //   setFormInfo({
  //     ...form,
  //     [e.target.value]: e.target.value,
  //   });
  // };

  // const register = (e) => {
  //   Axios.post("http://localhost:4000/user/add", {
  //     username: form.usernameReg,
  //     password: form.passwordReg,
  //     name: form.nameReg,
  //     email: form.emailReg,
  //     address: form.addressReg,
  //     phone: form.phoneReg,
  //   })
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch((e) => {
  //       setErrorMessage(e.message);
  //     });
  //   e.preventDefault();
  // };

  return (
    <>
      <div className="main__form__sign-up">
        <div
          className="main__form__sign-up__go-back"
          onClick={() => history.goBack()}
        >
          <i className="fas fa-arrow-left"></i>
        </div>
        <form action="" className="form__sign-up">
          <div>
            <h1>Sign-up</h1>
            {test && <h2>{test.data.message}</h2>}
            {usernameReg && <h2>{usernameReg}</h2>}
          </div>
          <div className="form__full-name form__input">
            <label for="full-name">Full name</label>
            <input
              type="text"
              name="nameReg"
              id="full-name"
              // value={form.nameReg}
              onChange={(e) => setNameReg(e.target.value)}
            />
          </div>
          <div className="form__username form__input">
            <label for="username">Username</label>
            <input
              type="text"
              // value={}
              name="usernameReg"
              id="username"
              onChange={(e) => setUsernameReg(e.target.value)}
            />
          </div>
          <div className="form__email form__input">
            <label for="email">Email</label>
            <input
              type="text"
              name="emailReg"
              id="email"
              // value={form.emailReg}
              onChange={(e) => setEmailReg(e.target.value)}
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
              // value={form.addressReg}
              onChange={(e) => setAddressReg(e.target.value)}
            />
          </div>
          <div className="form__phone form__input">
            <label for="phone">Phone</label>
            <input
              type="tel"
              name="phoneReg"
              id="phone"
              // value={form.phoneReg}
              onChange={(e) => setPhoneReg(e.target.value)}
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
              name="password__confirm"
              id="password__confirm"
              // value={form.passwordReg}
              onChange={(e) => setPasswordReg(e.target.value)}
            />
          </div>
          <button onClick={register}>submit</button>
          {errorMessage && <h3>{errorMessage}</h3>}
        </form>
      </div>
    </>
  );
}

export default Register;
