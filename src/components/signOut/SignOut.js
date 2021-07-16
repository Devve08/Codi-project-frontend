import React from "react";

function SignOut(props) {
  return (
    <div>
      <button onClick={() => props.setLoginPage(false)}>test</button>
    </div>
  );
}

export default SignOut;
