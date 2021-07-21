import React, { useState, useEffect, useRef, useCallback } from "react";
import classNames from "classnames";
import SwappingText from "./SwappingText";
import SocialIcons from "./SocialIcons";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Icon } from "figicons";
import NavLink from "./NavLink";
import ImageProfile from "../images/profile.jpg";

const menuAnimation = {
    hidden: {
        top: "-100%",
        borderBottomRightRadius: "50%",
        borderBottomLeftRadius: "50%",
        transition: { duration: 0.4 },
    },
    show: {
        top: 0,
        borderBottomRightRadius: "0%",
        borderBottomLeftRadius: "0%",
        transition: { duration: 0.4 },
    },
    exit: {
        top: "-100%",
        borderBottomRightRadius: "50%",
        borderBottomLeftRadius: "50%",
        transition: { duration: 0.4, delay: 0.4 },
    },
};

const splitterAnimation = {
    hidden: {
        y: -24,
        opacity: 0,
        transition: { duration: 0.4 },
    },
    show: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.4, delay: 0.4 },
    },
    exit: {
        y: -24,
        opacity: 0,
        transition: { duration: 0.4 },
    },
};

const socialIconsAnimation = {
    hidden: {
        y: 24,
        opacity: 0,
        transition: { duration: 0.4 },
    },
    show: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.4, delay: 0.4 },
    },
    exit: {
        y: 24,
        opacity: 0,
        transition: { duration: 0.4 },
    },
};

export default function Nav() {
    const dims = {
        fromTop: 40,
        height: 90,
    };
    const windowScroll = useRef(0);
    const navRef = useRef<HTMLDivElement | null>(null);
    const [menuOpen, setMenuOpen] = useState(false);
    const [navStickyVisible, setNavStickyVisible] = useState(false);
    const [navStickyAway, setNavStickyAway] = useState(false);
    const [offsetTop, setOffsetTop] = useState(0);
    const toggleClasses = classNames("toggle", { open: menuOpen });
    const navClasses = classNames({
        open: menuOpen,
        visible: navStickyVisible,
        away: navStickyAway,
    });
    const options = [
        { title: "Work & Projects", path: "/" },
        { title: "About me", path: "/about" },
        { title: "Résumé", path: "/images/resume.pdf" },
        { title: "Let's chat", path: "mailto:st.mansson@icloud.com" },
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

    const isNavScolled = useCallback(
        (scroll: number = window.scrollY) => {
            if (windowScroll.current < dims.fromTop && scroll >= dims.fromTop) {
                setNavStickyVisible(true);
            }

            if (windowScroll.current >= dims.fromTop && scroll < dims.fromTop) {
                setNavStickyVisible(false);
                setNavStickyAway(false);
            }
        },
        [dims.fromTop]
    );

    const listener = useCallback(() => {
        const { scrollY } = window;

        isNavScolled(scrollY);

        if (windowScroll.current < scrollY && scrollY > dims.fromTop) {
            setNavStickyAway(true);
        }

        if (
            windowScroll.current > scrollY &&
            !(scrollY <= dims.fromTop + dims.height)
        ) {
            setNavStickyAway(false);
        }

        windowScroll.current = scrollY;
    }, [dims.fromTop, dims.height, isNavScolled]);

    useEffect(() => {
        if (menuOpen) {
            document.body.classList.add("nooverflow");
            setOffsetTop(getOffsetTop());
        } else {
            document.body.classList.remove("nooverflow");
            setOffsetTop(getOffsetTop());
        }
    }, [menuOpen]);

    useEffect(() => {
        listener();

        window.addEventListener("wheel", listener, { passive: true });

        return () => {
            window.removeEventListener("wheel", listener);
        };
    }, [listener]);

    return (
        <nav ref={navRef} className={navClasses} key="nav">
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        variants={menuAnimation}
                        initial="hidden"
                        animate="show"
                        exit="exit"
                        className="menu"
                    >
                        <div className="container flex flex-column">
                            <motion.div
                                variants={splitterAnimation}
                                initial="hidden"
                                animate="show"
                                exit="exit"
                                className="splitter"
                            >
                                <span>Contents</span>
                            </motion.div>

                            {options.map((option, index) => (
                                <motion.div
                                    className="menuitem"
                                    initial={{ y: -24, opacity: 0 }}
                                    animate={{
                                        y: 0,
                                        opacity: 1,
                                        transition: {
                                            type: "linear",
                                            delay: 0.4 + index * 0.1,
                                        },
                                    }}
                                    exit={{
                                        y: -24,
                                        opacity: 0,
                                        transition: {
                                            type: "linear",
                                            delay: index * 0.1,
                                        },
                                    }}
                                >
                                    <NavLink
                                        key={option.title}
                                        to={option.path || ""}
                                        onClick={toggleMenu}
                                    >
                                        <span>{option.title}</span>

                                        <div className="arrow">
                                            <Icon
                                                name="arrow-right"
                                                width={48}
                                                height={48}
                                            />
                                        </div>
                                    </NavLink>
                                </motion.div>
                            ))}

                            <motion.div
                                variants={socialIconsAnimation}
                                initial="hidden"
                                animate="show"
                                exit="exit"
                            >
                                <SocialIcons />
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="container flex justify-between">
                <div className="flex items-center">
                    <div className="flex mr3">
                        <img
                            src={ImageProfile}
                            alt="Profile"
                            style={{
                                border: "4px solid #fff",
                                boxShadow: "0 8px 32px 4px rgba(0, 0, 0, 0.2)",
                                borderRadius: "50%",
                                height: 52,
                                width: 52,
                            }}
                        />
                    </div>
                    <div className="flex flex-column">
                        <Link className="logo" to="/" style={{ height: 25 }}>
                            <SwappingText
                                text={["Hi, I'm Stefan.", "Stefan Mansson"]}
                            />
                        </Link>

                        <motion.div
                            initial={{ y: 8, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 8, opacity: 0 }}
                            transition={{
                                delay: 0.2,
                                duration: 0.6,
                                type: "linear",
                            }}
                            className="flex items-center gray60@text"
                        >
                            <Icon
                                name="pin"
                                height={16}
                                width={16}
                                fill="currentColor"
                                strokeWidth={3}
                                style={{
                                    fillOpacity: 0.24,
                                    strokeOpacity: 0.64,
                                }}
                            />{" "}
                            <small className="ml1 gray70@text">
                                Nicosia, Cyprus
                            </small>
                        </motion.div>
                    </div>
                </div>

                <div className="menutoggle" onClick={toggleMenu}>
                    <div
                        className={toggleClasses}
                        style={{
                            top: menuOpen
                                ? getDefaultTop() - offsetTop
                                : undefined,
                        }}
                    >
                        <div className="toucharea" />
                    </div>
                </div>
            </div>
        </nav>
    );
}
