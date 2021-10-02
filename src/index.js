import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import App from './App';
import swDev from './swDev';
import 'semantic-ui-react';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

swDev();

