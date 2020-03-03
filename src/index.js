import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCHVOoelOXCpEJrjGTrfTD-ORGYe6XV-ak",
    authDomain: "project-five-birthday-log.firebaseapp.com",
    databaseURL: "https://project-five-birthday-log.firebaseio.com",
    projectId: "project-five-birthday-log",
    storageBucket: "project-five-birthday-log.appspot.com",
    messagingSenderId: "1016230114805",
    appId: "1:1016230114805:web:794ab14fa3c50058141cbc"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
