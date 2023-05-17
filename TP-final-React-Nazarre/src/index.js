import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSrWuoTd4bYX4b0mEIyCsI29ZidXr8lBo",
  authDomain: "leniano-3acdb.firebaseapp.com",
  projectId: "leniano-3acdb",
  storageBucket: "leniano-3acdb.appspot.com",
  messagingSenderId: "794143275175",
  appId: "1:794143275175:web:47cfe410787636648fc382"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


