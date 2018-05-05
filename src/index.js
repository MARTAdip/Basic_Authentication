import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch} from 'react-router-dom';
import Router from './components/Route/Router.jsx';
import App from './components/App.jsx';
import Login from './components/Login.jsx';
import Home from './components/Home.jsx';


ReactDOM.render(
        <BrowserRouter>
            <App />
        </BrowserRouter>    
, document.getElementById('root'));