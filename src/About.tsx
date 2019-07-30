import React from 'react';
import Intro from './components/Intro';
import Avatar from './images/avatar.png';
import Mentions from './components/Mentions';

const About: React.FC = () => {
    return (
        <>
            <Intro
                title="About me"
                avatar={Avatar}
                description="Born in Thailand, raised in Asia."
            />

            <section className="container flex-column">
                <h3 className="flex items-center">Mentions</h3>
                <p className="mt6">
                    I was lucky enough to be part of great things and be recognized by awesome
                    people around the web.
                </p>
                <Mentions />
            </section>
        </>
    );
};

export default About;
