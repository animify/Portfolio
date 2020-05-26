import React, { useState, useEffect, useRef, useCallback } from 'react';
import classNames from 'classnames';
import SwappingText from './SwappingText';
import SocialIcons from './SocialIcons';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';
import { Icon } from 'figicons';
import NavLink from './NavLink';

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
        { title: 'Work & Projects', path: '/' },
        { title: 'About me', path: '/about' },
        { title: 'Résumé', path: '/images/resume.pdf' },
        { title: "Let's chat", path: 'mailto:st.mansson@icloud.com' },
    ];

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const getDefaultTop = () => {
        return window.innerWidth <= 768 ? 32 : 112;
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
            setOffsetTop(getOffsetTop());
        }
    }, [menuOpen]);

    useEffect(() => {
        listener();

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
                            <div className="splitter"><span>Contents</span></div>

                            {options.map((option, index) => (
                                <NavLink
                                    key={option.title}
                                    to={option.path || ''}
                                    style={{ transitionDelay: `${140 * (index + 1) + 200}ms` }}
                                    onClick={toggleMenu}
                                >
                                    <span>{option.title}</span>

                                    <div className="arrow">
                                        <Icon name="arrow-right" width={48} height={48} />
                                    </div>
                                </NavLink>
                            ))}

                            <SocialIcons />
                        </div>
                    </div>
                )}
            </CSSTransition>

            <div className="container flex justify-between">
                <Link className="logo" to="/">
                    <SwappingText text={["Hi, I'm Stefan.", 'Stefan Mansson']} />
                </Link>
                <div className="menutoggle" onClick={toggleMenu}>
                    <div
                        className={toggleClasses}
                        style={{ top: menuOpen ? getDefaultTop() - offsetTop : undefined }}
                    >
                        <div className="toucharea" />
                    </div>
                </div>
            </div>
        </nav>
    );
}
