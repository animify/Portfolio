import React from 'react';
import { Switch, Route } from 'react-router';
import App from './Home';
import About from './About';
import NotFound from './NotFound';

export default function Routes() {
    return (
        <Switch>
            <Route index exact path="/" component={App} />
            <Route exact path="/about" component={About} />
            <Route path="*" component={NotFound} />
        </Switch>
    );
}
