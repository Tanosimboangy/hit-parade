import React from 'react';
import Popularsongs from './Popularsongs';
import { Link, Route, Switch } from 'react-router-dom';

function App() {

    return (
        <div className="wrapper">
            <h1>Hit Parade</h1>
            <ul className="list_headings">
                <li><h2><Link to="/">Popular songs</Link></h2></li>
                <li><h2><Link to="/styles">Styles</Link></h2></li>
                <li><h2><Link to="/add">Add</Link></h2></li>
                <li><h2><Link to="/cart">Cart</Link></h2></li>
            </ul>
            <Switch>
                <Route path="/"><Popularsongs /></Route>
                <Route path="/style"></Route>
                <Route path="/add"></Route>
                <Route path="/cart"></Route>
            </Switch>
        </div>
    )
}

export default App;