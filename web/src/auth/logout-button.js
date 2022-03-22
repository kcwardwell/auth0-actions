// src/components/logout-button.js

import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import ButtonAuth0Styled from '../styled/buttons/btnAuth0.styles'

const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <ButtonAuth0Styled
      className="btn btn-danger btn-block"
      onClick={() =>
        logout({
          returnTo: window.location.origin,
        })
      }
    >
      Log Out
    </ButtonAuth0Styled>
  );
};

export default LogoutButton;
