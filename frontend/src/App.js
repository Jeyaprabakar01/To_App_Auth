import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Todos from "./components/todos/Todos";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import NavBar from "./components/navbar/NavBar";

function App() {
  return (
    <>
      <BroswerRouter>
        <NavBar />
        <Switch>
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/" component={Todos} />
        </Switch>
      </BroswerRouter>
    </>
  );
}

export default App;
