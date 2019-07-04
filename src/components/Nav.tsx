import React from 'react';

export default function Nav() {
    return (
        <nav className="flex justify-between">
            <a className="logo" href="">
                Hi, I'm Stefan.
            </a>
            <div className="options">
                <a href="">About</a>
            </div>
        </nav>
    );
}
