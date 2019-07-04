import React, { useState } from 'react';
import classNames from 'classnames';

export default function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuClasses = classNames('menu', { open: menuOpen });

    return (
        <nav className="flex justify-between">
            <a className="logo" href="">
                Hi, I'm Stefan.
            </a>
            <div className={menuClasses} onClick={() => setMenuOpen(!menuOpen)} />
        </nav>
    );
}
