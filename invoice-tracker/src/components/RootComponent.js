import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignInComponent from "./SignInComponent";
import SignUpComponent from "./SignUpComponent";
import CreateInvoiceComponent from "./CreateInvoiceComponent"

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
            <Route
              exact
              path={"/signup"}
              render={() => {
                return <SignUpComponent />;
              }}
            />
            <Route
              exact
              path={"/create_invoice"}
              render={() => {
                return <CreateInvoiceComponent />;
              }}
            />
          </Switch>
        </Router>
      ); 
    }
  }

export default RootComponent;