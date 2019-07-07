import React from 'react';
import './styles/app.scss';
import Intro from './components/Intro';
import Projects from './components/Projects';
import OpenSource from './components/OpenSource';
import Nav from './components/Nav';
import Footer from './components/Footer';

const App: React.FC = () => {
    return (
        <div className="page">
            <Nav />
            <Intro />
            <main>
                <Projects />
                <OpenSource />
            </main>

            <Footer />
        </div>
    );
};

export default App;
