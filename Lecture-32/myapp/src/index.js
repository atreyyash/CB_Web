import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Lucky from './components/Lucky';
import Todo from './components/Todo/Todo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App />
    <Lucky/> */}
    <Todo/>
  </React.StrictMode>
);