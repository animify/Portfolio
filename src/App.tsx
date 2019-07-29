import React from 'react';
import Intro from './components/Intro';
import Projects from './components/Projects';
import OpenSource from './components/OpenSource';
import Nav from './components/Nav';
import Footer from './components/Footer';

const App: React.FC = () => {
    return (
        <div className="page">
            <Nav />
            <Intro
                title="Indie maker, coffee addict, traveller, pixel admirer &amp; labrador owner."
                description="Currently getting up in the morning to engineer the next gen of user flow tools
                    at Overflow. Always working on designing &amp; building something new."
            />
            <main>
                <Projects />
                <OpenSource />
            </main>

            <Footer />
        </div>
    );
};

export default App;
