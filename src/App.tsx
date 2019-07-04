import React from 'react';
import './styles/app.scss';
import Project from './components/Project';

const App: React.FC = () => {
    return (
        <div className="App">
            <header className="App-header">
                <Project
                    title="Blossom"
                    description="A building block, design framework for the modern web."
                    mode="light"
                />
            </header>
        </div>
    );
};

export default App;
