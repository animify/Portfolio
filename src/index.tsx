import './styles/index.scss';
import React from 'react';
import ReactGA from 'react-ga';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from './App';

ReactGA.initialize('UA-146368352-1');

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.register();
