import React, { useState } from "react";
import SignIn from "../components/sign-in/SignIn";
import Register from "../components/register/Register";

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
        <SignIn
          buttonTrigger={() => props.setTrigger()}
          handlerTrigger={triggerHandler}
          signInIsItLogged={(e) => props.isItLogged(e)}
        />
      )}
      {signUpTrigger && (
        <Register
          signUpstatus={signUpTrigger}
          handlerTrigger={triggerHandler}
          signInIsItLogged={(e) => props.isItLogged(e)}
        />
      )}
    </div>
  ) : (
    ""
  );
}

export default Signin;
