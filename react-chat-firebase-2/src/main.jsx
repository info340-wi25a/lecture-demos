import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom'

import App from './components/App.jsx';

import { initializeApp } from "firebase/app";

//import CSS
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOXP6Xp89g70Zuwye4g0sfYaT7QcIUjrM",
  authDomain: "react-chat-wi25.firebaseapp.com",
  projectId: "react-chat-wi25",
  storageBucket: "react-chat-wi25.firebasestorage.app",
  messagingSenderId: "137525871122",
  appId: "1:137525871122:web:1432c3c551621ec1160ecb"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);