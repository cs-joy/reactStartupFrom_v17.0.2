import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import App from './App';
import swDev from './swDev';
import 'semantic-ui-css/semantic.min.css';
import BasicExample from './example';

ReactDOM.render(
    <React.StrictMode>
        <BasicExample />
    </React.StrictMode>,
    document.getElementById('root')
);

swDev();

