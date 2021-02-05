import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { getToken } from "./api/battlenet";

import Frontpage from "./pages/Frontpage";
import CharacterPage from "./pages/CharacterPage";

const MiseryContext = React.createContext();
export const useMisery = () => useContext(MiseryContext);

const App = () => {
  const [token, setToken] = useState();

  useEffect(() => {
    fetchToken();
  }, []);

  const fetchToken = async () => {
    const tok = await getToken();
    setToken(tok);
  };

  return (
    <MiseryContext.Provider value={{ token }}>
      {token && (
        <Router>
          <Switch>
            <Route exact path="/" component={Frontpage} />

            <Route
              exact
              path="/character/:name"
              component={(props) => (
                <CharacterPage name={props.match.params.name} />
              )}
            />
          </Switch>
        </Router>
      )}
    </MiseryContext.Provider>
  );
};

export default App;
