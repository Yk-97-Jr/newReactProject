import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider} from "react-query";
import "./App.css";
import Header from "./Header";
import Eventlist from "./Eventlist";
import Shoppingcart from "./Shoppingcart";
import Confirmation from "./Confirmation";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
     <Router>
      <Header />
      <Route exact path="/" component={Eventlist} />
      <Route exact path="/cart" component={Shoppingcart} />
      <Route exact path="/confirm" component={Confirmation} />
     </Router>
    </QueryClientProvider>
  );
}

export default App;
