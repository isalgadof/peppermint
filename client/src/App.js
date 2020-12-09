import React, {
  useContext, useEffect, useState,
} from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import "./app.css";
import "rsuite/dist/styles/rsuite-default.css";

import Home from "./pages/Home";
import Ticket from "./pages/Ticket";
import Navigation from "./component/Navigation";
import Login from "./pages/Login";
import Reg from "./pages/Reg";
import Monitor from "./pages/Monitor";
import Admin from "./pages/Admin";
import Reset from './pages/Reset';

import { GlobalContext } from './Context/GlobalState';

const Routing = () => {

  const [loggedIn, setLoggedIn] = useState(true)

  const { user, isLogged, auth } = useContext(GlobalContext);

  useEffect(() => {
    isLogged()
  })

  console.log(auth)

  return (
    <Router>
      <Switch>
        <Route path="/login">
          <div className="login-container">
            <Login />
          </div>
        </Route>

        <Route path="/signup">
          <div className="login-container">
            <Reg />
          </div>
        </Route>

        <Route exact path="/" >
          {loggedIn ? <Redirect to="/dash" /> : <Redirect to="/login" />}
        </Route>
          
        <Route path="/dash" component={Home} />

        <Route>
          <Navigation />
          <Route path="/tickets" component={Ticket} />
          <Route path="/monitor" component={Monitor} />
          <Route path="/admin" component={Admin} />
        </Route>
      </Switch>

      <Route exact path="/reset">
        <Reset/>
      </Route>

    </Router>
  );
};

const App = () => {

  return (
      <Routing />
  );
};

export default App;
