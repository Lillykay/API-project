import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import LandingPage from "./components/LandingPage";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import CreateGroupsForm from "./components/CreateGroupsForm/CreateGroupsForm";
import SeeAllGroups from "./components/SeeAllGroups/SeeAllGroups";
function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route exact path="/groups/new">
            <CreateGroupsForm />
          </Route>
          <Route exact path="/groups">
            <SeeAllGroups />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
