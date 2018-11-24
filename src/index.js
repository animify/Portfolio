import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import "./index.scss";
import App from "./App";
import About from "./About";
import Nav from "./Nav";
import * as serviceWorker from "./serviceWorker";

const Routes = () => (
    <main>
        <BrowserRouter>
            <React.Fragment>
                <Nav />
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route path="/about" component={About} />
                </Switch>
            </React.Fragment>
        </BrowserRouter>
    </main>
)
ReactDOM.render(<Routes />, document.getElementById("root"));

serviceWorker.register();
