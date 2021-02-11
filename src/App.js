import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Popularsongs from '../src/containers/PopularSongs';
import Styles from '../src/containers/Styles';
import StyleContents from '../src/containers/StyleContents';
import AddNewSongs from '../src/containers/AddNewSongs';
import AddToLyrics from '../src/containers/AddToLyrics';
import Carts from '../src/containers/Carts';

import Container from './components/Container';

function App() {
    return (
        <Container>
            <Router>
                <Container.Header>Hit Parade</Container.Header>
                <Container.List>
                    <Container.Item><Link to="/">Popular songs</Link></Container.Item>
                    <Container.Item><Link to="/style">Styles</Link></Container.Item>
                    <Container.Item><Link to="/add">Add</Link></Container.Item>
                    <Container.Item><Link to="/cart">Cart</Link></Container.Item>
                </Container.List>
                <Switch>
                    <Route exact path="/"><Popularsongs /></Route>
                    <Route exact path="/style">< Styles/></Route>
                    <Route path="/style/:name"><StyleContents/></Route>
                    <Route path="/add"><AddNewSongs /></Route>
                    <Route path="/cart"><Carts /></Route>
                    <Route path="/song/:songId"><AddToLyrics/></Route>
                </Switch>
            </Router>
        </Container>
    )
}
export default App;