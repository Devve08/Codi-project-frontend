import React, { useState } from "react";
import Login from "../login/Login";
import Register from "../register/Register";

function Signin(props) {
  const [signInTrigger, setSignInTrigger] = useState(true);
  const [signUpTrigger, setSignUpTrigger] = useState(false);

  const triggerHandler = () => {
    setSignInTrigger(!signInTrigger);
    setSignUpTrigger(!signUpTrigger);
  };

  return props.trigger ? (
    <div className="main__form ">
      {signInTrigger && (
        <Login
          setTrigger={() => props.setTrigger()}
          triggerHandler={triggerHandler}
          isItLogged={(e) => props.isItLogged(e)}
        />
      )}
      {signUpTrigger && (
        <Register
          setTrigger={() => props.setTrigger()}
          signUpTrigger={signUpTrigger}
          triggerHandler={triggerHandler}
          isItLogged={(e) => props.isItLogged(e)}
        />
      )}
    </div>
  ) : null;
}

export default Signin;
