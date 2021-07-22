import React from "react";
import { Switch, Route } from "react-router";
import App from "./containers/Home";
import About from "./containers/About";
import NotFound from "./containers/NotFound";

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/about" component={About} />
            <Route path="*" component={NotFound} />
        </Switch>
    );
}
