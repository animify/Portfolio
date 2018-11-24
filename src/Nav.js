import React from "react";
import { Link } from "react-router-dom";

const Nav = () => (
    <React.Fragment>
        <div class="waves">
          <div class="wave" />
          <div class="wave two" />
          <div class="wave three" />
        </div>
        <header>
            <nav>
                <Link to="/" className="logo">Stefan Mansson</Link>
                <div>
                    <Link to="/about">About</Link>
                    <Link to="/">Email</Link>
                </div>
            </nav>
        </header>
    </React.Fragment>
)

export default Nav;