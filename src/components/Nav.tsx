import React, { useState, useEffect, useRef, useCallback } from 'react';
import classNames from 'classnames';
import SwappingText from './SwappingText';
import SocialIcons from './SocialIcons';
import { CSSTransition } from 'react-transition-group';

export default function Nav() {
    const dims = {
        fromTop: 80,
        height: 90,
    };
    const windowScroll = useRef(0);
    const navRef = useRef<HTMLDivElement | null>(null);
    const [menuOpen, setMenuOpen] = useState(false);
    const [navStickyVisible, setNavStickyVisible] = useState(false);
    const [navStickyAway, setNavStickyAway] = useState(false);
    const [offsetTop, setOffsetTop] = useState(0);
    const toggleClasses = classNames('toggle', { open: menuOpen });
    const navClasses = classNames({
        open: menuOpen,
        visible: navStickyVisible,
        away: navStickyAway,
    });
    const options = [
        { title: 'About me' },
        { title: 'Work' },
        { title: 'Resume' },
        { title: "Let's talk" },
    ];

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const getOffsetTop = () => {
        let top = 0;

        if (navRef.current) {
            ({ top } = navRef.current.getBoundingClientRect());
        }

        return top;
    };

    const isNavScolled = (scroll: number = window.scrollY) => {
        if (windowScroll.current < dims.fromTop && scroll >= dims.fromTop) {
            setNavStickyVisible(true);
        }

        if (windowScroll.current >= dims.fromTop && scroll < dims.fromTop) {
            setNavStickyVisible(false);
            setNavStickyAway(false);
        }
    };

    const listener = useCallback(() => {
        const { scrollY } = window;

        isNavScolled(scrollY);

        if (windowScroll.current < scrollY && scrollY > dims.fromTop) {
            setNavStickyAway(true);
        }

        if (windowScroll.current > scrollY && !(scrollY <= dims.fromTop + dims.height)) {
            setNavStickyAway(false);
        }

        windowScroll.current = scrollY;
    }, []);

    useEffect(() => {
        if (menuOpen) {
            document.body.classList.add('nooverflow');
            setOffsetTop(getOffsetTop());
        } else {
            document.body.classList.remove('nooverflow');
        }
    }, [menuOpen]);

    useEffect(() => {
        isNavScolled();
        window.addEventListener('wheel', listener, { passive: true });

        return () => {
            window.removeEventListener('wheel', listener);
        };
    }, []);

    return (
        <nav ref={navRef} className={navClasses} key="nav">
            <CSSTransition in={menuOpen} timeout={450}>
                {classes => (
                    <div className={classNames('menu', classes)} key="menu">
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
            <div className="container flex justify-between">
                <SwappingText text={["Hi, I'm Stefan.", 'Stefan Mansson']} />
                <div className="menutoggle">
                    <div
                        className={toggleClasses}
                        onClick={toggleMenu}
                        style={{ top: menuOpen ? 112 - offsetTop : undefined }}
                    />
                </div>
            </div>
        </nav>
    );
}
