import React from 'react';
import Routes from './Routes';
import Nav from './components/Nav';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';
import Footer from './components/Footer';

export default function App() {
    return (
        <Router history={createBrowserHistory()}>
            <div className="page">
                <Nav />
                <Routes />
                <Footer />
            </div>
        </Router>
    );
}
