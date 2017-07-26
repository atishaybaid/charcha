import React from "react";
import ReactDOM from "react-dom";
import route from './routes';
import App from './container/App';
import { BrowserRouter } from 'react-router-dom'



ReactDOM.render(<BrowserRouter> 
    <App/>
    </BrowserRouter>,document.getElementById("charcha-app"));