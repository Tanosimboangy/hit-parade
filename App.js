import React from 'react';
import Popularsongs from './component/Popularsongs';
import Styles from './component/Styles';
import StyleContents from './component/StyleContents';
import Add from './component/Add';
import Carts from './component/Carts';
import { Link, Route, Switch } from 'react-router-dom';
import AddToLyrics from './component/AddToLyrics';

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
                <Route exact path="/">
                    <Popularsongs />
                </Route>
                <Route path="/add">
                    <Add />
                </Route>
                <Route path="/cart">
                    <Carts />
                </Route>
                <Route exact path="/style">
                    < Styles/>
                </Route>
                <Route path="/style/:name">
                    <StyleContents/>
                </Route>
                <Route path="/lyrics">
                    <AddToLyrics/>
                </Route>
            </Switch>
        </div>
    )
}

export default App;