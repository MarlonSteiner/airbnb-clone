import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Hello from './components/hello';
// import registerServiceWorker from './registerServiceWorker';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Hello firstName="Marlon" lastName="Steiner"/>);
// registerServiceWorker();
