import React from 'react';
import './styles/app.scss';
import Projects from './components/Projects';
import Intro from './components/Intro';
import Nav from './components/Nav';

const App: React.FC = () => {
    return (
        <div>
            <Nav />
            <Intro />
            <main>
                <Projects />
            </main>
        </div>
    );
};

export default App;
