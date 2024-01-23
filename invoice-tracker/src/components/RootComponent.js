import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import SignInComponent from "./SignInComponent";

class RootComponent extends React.Component {
  
  render() {
       return (
        <Router>
          <Switch>
            <Route
              exact
              path={"/signin"}
              render={() => {
                return <SignInComponent />;
              }}
            />
          </Switch>
        </Router>
      ); 
    }
  }

export default RootComponent;
