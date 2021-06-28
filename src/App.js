import "@ui5/webcomponents/dist/Assets";
import "@ui5/webcomponents-fiori/dist/Assets";

import Login from "./pages/Auth";
import { useEffect, useMemo, useState } from "react";
import { ApolloProvider } from "@apollo/client";
import client from "./config/apollo";
import AuthContext from "./Context/Auth.context";
import Navigation from "./routes/navigation";
import { decodeToken, getToken, removeToken } from "./utils/token";
require("dotenv").config();
function App() {
  //State inicial
  const [auth, setAuth] = useState(undefined);

  //Seteamos el token
  useEffect(() => {
    const session = getToken();
    if (!session) {
      setAuth(undefined);
    } else {
      setAuth(decodeToken(session));
    }
  }, []);
  //login de usuario
  const setUser = (user) => {
    setAuth(user);
  };
  //Deloguear usuarios
  const logout = () => {
    removeToken();
    setAuth(undefined);
  };
  //memo
  const authData = useMemo(
    () => ({
      auth,
      logout,
      setUser,
    }),
    [auth]
  );

  //if (auth === undefined) return null;

  return (
    <ApolloProvider client={client}>
      <AuthContext.Provider value={authData}>
        {!auth || auth === undefined ? <Login /> : <Navigation />}
      </AuthContext.Provider>
    </ApolloProvider>
  );
}

export default App;
