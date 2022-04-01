import { useAuth0 } from "@auth0/auth0-react";
import AuthNav from "./auth/auth-nav";
import jwtDecode from "jwt-decode";

const App = () => {
  const { getIdTokenClaims, getAccessTokenSilently, user } = useAuth0();

  const GetToken = async () => {
    const token = await getAccessTokenSilently();
    const tokendecode = jwtDecode(token);
    console.log("tokendecode", tokendecode);
    // console.log("aud", tokendecode.aud);

    const filtered = Object.entries(tokendecode).filter(
      ([key, value]) => key === "https://agileapi.com/roles"
    );

    // const filtered = asArray.filter(
    //   ([key, value]) => key === "https://agileapi.com/roles"
    // );

    // Convert the key/value array back to an object:
    // `{ name: 'Luke Skywalker', title: 'Jedi Knight' }`
    const justStrings = Object.fromEntries(filtered);
    console.log('justStrings', justStrings)

    const idToken = await getIdTokenClaims();
    console.log("accesstoken", token);
    console.log("idToken", idToken);
    console.log("user", user);
  };

  const GetManagementAPIToken = async () => {
    
  }

  return (
    <>
      <div>
        <AuthNav />
        <button type="button" onClick={GetToken}>
          Get Token
        </button>

        <button type="button" onClick={GetManagementAPIToken}>
          Get Managment API Token
        </button>
      </div>
    </>
  );
};

export default App;
