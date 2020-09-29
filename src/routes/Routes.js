import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "../pages/Login/Login";
import LeadsPanel from "../pages/LeadsPanel/LeadsPanel";

 
export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/leadspanel" component={LeadsPanel} />
      </Switch>
    </BrowserRouter>
  );
}
