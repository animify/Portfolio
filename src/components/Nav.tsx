import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';
import SwappingText from './SwappingText';
import SocialIcons from './SocialIcons';
import { CSSTransition } from 'react-transition-group';

export default function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleClasses = classNames('toggle', { open: menuOpen });
    const navClasses = classNames({ open: menuOpen });
    const options = [
        { title: 'About me' },
        { title: 'Work' },
        { title: 'Resume' },
        { title: "Let's chat" },
    ];

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        if (menuOpen) {
            document.body.classList.add('nooverflow');

            window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth',
            });
        } else {
            document.body.classList.remove('nooverflow');
        }
    }, [menuOpen]);

    return (
        <nav className={navClasses}>
            <CSSTransition in={menuOpen} timeout={400}>
                {classes => (
                    <div className={classNames('menu', classes)}>
                        <div className="container flex flex-column">
                            <p className="split">Contents</p>

                            {options.map((option, index) => (
                                <a
                                    key={option.title}
                                    href=""
                                    style={{ transitionDelay: `${140 * (index + 1) + 200}ms` }}
                                >
                                    {option.title}
                                </a>
                            ))}

                            <SocialIcons />
                        </div>
                    </div>
                )}
            </CSSTransition>
            {/* <ReactCSSTransitionGroup
                transitionName="menu"
                transitionEnter={true}
                transitionLeave={true}
                transitionEnterTimeout={animationTime}
                transitionLeaveTimeout={animationTime}
                component={React.Fragment}
            >
                {menuOpen && (
                    <div className="menu">
                        <div className="container flex flex-column">
                            <p className="split">Contents</p>

                            {options.map((option, index) => (
                                <a
                                    key={option.title}
                                    href=""
                                    style={{ transitionDelay: `${140 * (index + 1) + 200}ms` }}
                                >
                                    {option.title}
                                </a>
                            ))}

                            <SocialIcons />
                        </div>
                    </div>
                )}
            </ReactCSSTransitionGroup> */}
            <div className="container flex justify-between">
                <SwappingText text={["Hi, I'm Stefan.", 'Stefan Mansson']} />
                <div className="menutoggle">
                    <div className={toggleClasses} onClick={toggleMenu} />
                </div>
            </div>
        </nav>
    );
}
