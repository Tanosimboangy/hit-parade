import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import { ContextProvider } from './Context';
import App from "./App.js";

console.log(ContextProvider);

ReactDOM.render(
    <ContextProvider>
        <Router>
            <App />
        </Router>
     </ContextProvider>
    , document.getElementById("root"));