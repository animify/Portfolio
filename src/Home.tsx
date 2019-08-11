import React from 'react';
import Intro from './components/Intro';
import Projects from './components/Projects';
import OpenSource from './components/OpenSource';

const Home: React.FC = () => {
    return (
        <>
            <Intro
                title="Indie maker, coffee addict, traveller, pixel admirer &amp; labrador owner."
                description="Currently getting up in the morning to engineer the next gen of user flow tools
                    at Overflow. Always working on designing and building something new."
            />
            <main>
                <Projects />
                <OpenSource />
            </main>
        </>
    );
};

export default Home;
