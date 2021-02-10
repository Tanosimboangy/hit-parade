import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

import Popularsongs from '../src/components/Popularsongs';
import Styles from '../src/components/Styles';
import StyleContents from '../src/components/StyleContents';
import AddNewSongs from '../src/components/AddNewSongs';
import AddToLyrics from '../src/components/AddToLyrics';
import Carts from '../src/components/Carts';

function App() {
    return (
        <div className="wrapper">
            <Router>
                <h1>Hit Parade</h1>
                <ul className="list_headings">
                    <li><h2><Link to="/">Popular songs</Link></h2></li>
                    <li><h2><Link to="/style">Styles</Link></h2></li>
                    <li><h2><Link to="/add">Add</Link></h2></li>
                    <li><h2><Link to="/cart">Cart</Link></h2></li>
                </ul>
                <Switch>
                    <Route exact path="/">
                        <Popularsongs />
                    </Route>
                    <Route exact path="/style">
                        < Styles/>
                    </Route>
                    <Route path="/style/:name">
                        <StyleContents/>
                    </Route>
                    <Route path="/add">
                        <AddNewSongs />
                    </Route>
                    <Route path="/cart">
                        <Carts />
                    </Route>
                    <Route path="/song/:songId">
                        <AddToLyrics/>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App;