import React from 'react';
import Popularsongs from './component/Popularsongs';
import Styles from './component/Styles';
import { Link, Route, Switch } from 'react-router-dom';

function App() {

    return (
        <div className="wrapper">
            <h1>Hit Parade</h1>
            <ul className="list_headings">
                <li><h2><Link to="/">🔥Popular songs</Link></h2></li>
                <li><h2><Link to="/style">💛Styles</Link></h2></li>
                <li><h2><Link to="/add">➕Add</Link></h2></li>
                <li><h2><Link to="/cart">🛒Cart</Link></h2></li>
            </ul>
            <Switch>
                <Route exact path="/"><Popularsongs /></Route>
                <Route path="/style">< Styles/></Route>
                <Route path="/addfire"></Route>
                <Route path="/cart"></Route>
            </Switch>
        </div>
    )
}

export default App;