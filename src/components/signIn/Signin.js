import React, { useState } from "react";
import { useClickOutside } from "../../customHooks/useClickOutside";
import Login from "../login/Login";
import Register from "../register/Register";

function Signin(props) {
  const [signInTrigger, setSignInTrigger] = useState(true);
  const [signUpTrigger, setSignUpTrigger] = useState(false);

  const triggerHandler = () => {
    setSignInTrigger(!signInTrigger);
    setSignUpTrigger(!signUpTrigger);
  };

  let domNode = useClickOutside(() => {
    props.setLoginPage(false);
  });

  return props.loginPage ? (
    <>
      <div className="main__form" ref={domNode}>
        {signInTrigger && (
          <Login
            setLoginPage={() => props.setLoginPage()}
            triggerHandler={triggerHandler}
            setLogged={(e) => props.setLogged(e)}
          />
        )}
        {signUpTrigger && (
          <Register
            setLoginPage={() => props.setLoginPage()}
            signUpTrigger={signUpTrigger}
            triggerHandler={triggerHandler}
            setLogged={(e) => props.setLogged(e)}
          />
        )}
      </div>
    </>
  ) : null;
}

export default Signin;
