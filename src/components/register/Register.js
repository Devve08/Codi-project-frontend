import React, { useState } from "react";
import "./Register.css";
import Axios from "axios";

function Register(props) {
  const [doc, setDoc] = useState(null);
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
        console.log(res);
        setDoc(res);
        // props.signInIsItLogged(res.data.data[0]);
        console.log(res.data.data[0].username);
        setErrorMessage(false);
      })
      .catch((e) => {
        console.log(form);
        setErrorMessage(e.message);
      });
  };

  const insertForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return props.signUpstatus ? (
    <>
      <div className="main__form__sign-up">
        <div
          className="main__form__sign-up__go-back"
          onClick={() => props.handlerTrigger()}
        >
          <i className="fas fa-arrow-left"></i>
        </div>
        <form action="" className="form__sign-up">
          <div>
            <h1>Sign-up</h1>
            {/* {doc && <h2>{doc.data.message}</h2>} */}
            {form.usernameReg && <h2>{form.usernameReg}</h2>}
          </div>
          <div className="form__full-name form__input">
            <label for="full-name">Full name</label>
            <input
              type="text"
              name="nameReg"
              id="full-name"
              // value={form.nameReg}
              // onChange={(e) => setForm({ ...form, nameReg: e.target.value })}
              onChange={(e) => insertForm(e)}
            />
          </div>
          <div className="form__username form__input">
            <label for="username">Username</label>
            <input
              type="text"
              // value={}
              name="usernameReg"
              id="username"
              // onChange={(e) =>
              //   setForm({ ...form, usernameReg: e.target.value })
              // }
              onChange={(e) => insertForm(e)}
            />
          </div>
          <div className="form__email form__input">
            <label for="email">Email</label>
            <input
              type="text"
              name="emailReg"
              id="email"
              // value={form.emailReg}
              // onChange={(e) => setForm({ ...form, emailReg: e.target.value })}
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
              // value={form.addressReg}
              // onChange={(e) => setForm({ ...form, addressReg: e.target.value })}
              onChange={(e) => insertForm(e)}
            />
          </div>
          <div className="form__phone form__input">
            <label for="phone">Phone</label>
            <input
              type="tel"
              name="phoneReg"
              id="phone"
              // value={form.phoneReg}
              // onChange={(e) => setForm({ ...form, phoneReg: e.target.value })}
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
              // value={form.passwordReg}
              // onChange={(e) =>
              //   setForm({ ...form, passwordReg: e.target.value })
              // }
              onChange={(e) => insertForm(e)}
            />
          </div>
          <button onClick={register}>submit</button>
          {errorMessage && <h3>{errorMessage}</h3>}
        </form>
      </div>
    </>
  ) : (
    ""
  );
}

export default Register;
