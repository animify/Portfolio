import React from 'react';
import Routes from './Routes';
import Nav from './components/Nav';
import { Router } from 'react-router';
import Footer from './components/Footer';
import History from './History';

export default function App() {
    return (
        <Router history={History}>
            <Nav />
            <Routes />
            <Footer />
        </Router>
    );
}
