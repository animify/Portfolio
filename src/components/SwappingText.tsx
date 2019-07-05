import React, { useState, useEffect, useRef, useCallback } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

interface IProps {
    text: React.ReactText[];
}

export default function SwappingText({ text }: IProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [nextIndex, setNextIndex] = useState(1);
    const previousText = text[currentIndex];
    const currentText = text[nextIndex];

    useEffect(() => {
        doAnimate();
    }, [currentIndex]);

    const doAnimate = useCallback(() => {
        if (!text[currentIndex + 1]) return;

        setTimeout(() => {
            setCurrentIndex(currentIndex + 1);

            if (text.length !== nextIndex + 1) {
                setTimeout(() => {
                    setNextIndex(nextIndex + 1);
                }, 3000);
            }
        }, 3000);
    }, []);

    return (
        <div className="swapping">
            <ReactCSSTransitionGroup
                transitionName="swapping-prev"
                transitionEnter={true}
                transitionLeave={true}
                transitionEnterTimeout={12000}
                transitionLeaveTimeout={12000}
                component={React.Fragment}
            >
                {nextIndex !== currentIndex && <div className="absolute">{previousText}</div>}
            </ReactCSSTransitionGroup>
            <ReactCSSTransitionGroup
                transitionName="swapping-next"
                transitionEnter={true}
                transitionLeave={true}
                transitionEnterTimeout={12000}
                transitionLeaveTimeout={12000}
                component={React.Fragment}
            >
                {nextIndex === currentIndex && <div className="absolute">{currentText}</div>}
            </ReactCSSTransitionGroup>
        </div>
    );
}
