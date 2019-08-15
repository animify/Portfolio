import React, { useState, useEffect, useCallback } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

interface IProps {
    text: React.ReactText[];
}

export default function SwappingText({ text }: IProps) {
    const delay = 12000;
    const [currentIndex, setCurrentIndex] = useState(0);
    const [nextIndex, setNextIndex] = useState(1);
    const previousText = text[currentIndex];
    const currentText = text[nextIndex];
    const beginTimer = useCallback(() => {
        if (!text[currentIndex + 1]) return;

        window.setTimeout(() => {
            setCurrentIndex(currentIndex + 1);

            if (text.length !== nextIndex + 1) {
                window.setTimeout(() => {
                    setNextIndex(nextIndex + 1);
                }, 3000);
            }
        }, 3000);
    }, []);

    useEffect(beginTimer, [currentIndex]);

    return (
        <div className="swappingtext">
            <ReactCSSTransitionGroup
                transitionName="swapping-prev"
                transitionEnter={true}
                transitionLeave={true}
                transitionEnterTimeout={delay}
                transitionLeaveTimeout={delay}
                component={React.Fragment}
            >
                {nextIndex !== currentIndex && <span className="inner">{previousText}</span>}
            </ReactCSSTransitionGroup>
            <ReactCSSTransitionGroup
                transitionName="swapping-next"
                transitionEnter={true}
                transitionLeave={true}
                transitionEnterTimeout={delay}
                transitionLeaveTimeout={delay}
                component={React.Fragment}
            >
                {nextIndex === currentIndex && <span className="inner">{currentText}</span>}
            </ReactCSSTransitionGroup>
        </div>
    );
}
