import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
    <React.Fragment>
        <div className="waves">
            <div className="wave" />
            <div className="wave two" />
            <div className="wave three" />
        </div>
        <header>
            <nav>
                <Link to="/" className="logo">
                    Stefan Mansson
                </Link>
                <div>
                    <Link to="/about">About</Link>
                    <Link to="/">Email</Link>
                </div>
            </nav>
        </header>
    </React.Fragment>
);

export default Nav;
