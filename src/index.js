import React from 'react';
import ReactDOM from 'react-dom/client';
//import App from './App';
import App from './app-2';
//import App from './app-3';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App initialCount={0} />
);

