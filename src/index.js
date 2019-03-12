import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

/*
Note: 'props' are really just paramaters, passed into the React (JS) class. Hence 'stateless' components can revert to straight 'const' functions. 

Key principles for functions: accept params, return something. 
*/

// if (module.hot) {
//     module.hot.accept();
// }

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
