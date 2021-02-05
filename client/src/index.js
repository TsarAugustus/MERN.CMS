import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import PostWrapper from './components/PostWrapper';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <PostWrapper />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
