// src/components/login-button.js

import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import ButtonAuth0Styled from '../styled/buttons/btnAuth0.styles'

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <ButtonAuth0Styled
      className="btn btn-primary btn-block"
      onClick={() => loginWithRedirect()}
    >
      Log In
    </ButtonAuth0Styled>
  );
};

export default LoginButton;
