// importing from node_modules 
import React from 'react'; // importing react core library 
import ReactDOM from 'react-dom/client';

//custom imports 
import './index.css'; // project-wide styles
import App from './App';  // importing App component
import reportWebVitals from './reportWebVitals'; // analytics related

// finding div with id root
const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
