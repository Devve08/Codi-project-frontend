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

  return props.loginPage ? (
    <div className="main__form ">
      {signInTrigger && (
        <SignIn
          setLoginPage={() => props.setLoginPage()}
          triggerHandler={triggerHandler}
          setLogged={(e) => props.setLogged(e)}
        />
      )}
      {signUpTrigger && (
        <Register
          signUpstatus={signUpTrigger}
          setLoginPage={() => props.setLoginPage()}
          triggerHandler={triggerHandler}
          setLogged={(e) => props.setLogged(e)}
        />
      )}
    </div>
  ) : (
    ""
  );
}

export default Signin;
