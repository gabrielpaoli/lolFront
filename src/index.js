import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import './index.css';
import SearchChampions from './components/searchChampions/SearchChampions.js';
import Champion from './components/champion/Champion.js';
import Summoner from './components/summoner/Summoner.js';
import SearchSummoner from './components/searchSummoner/SearchSummoner.js';
import * as serviceWorker from './serviceWorker';
import { Navbar, Icon, Dropdown } from 'react-materialize';


ReactDOM.render(
  <React.StrictMode>

    <Router>
      <div>
        <Navbar
          alignLinks="left"
          brand={<a className="brand-logo" href="/home">League of legends</a>}
          id="mobile-nav"
          menuIcon={<Icon>menu</Icon>}
          options={{
            draggable: true,
            edge: 'left',
            inDuration: 250,
            onCloseEnd: null,
            onCloseStart: null,
            onOpenEnd: null,
            onOpenStart: null,
            outDuration: 200,
            preventScrolling: true
          }}
        >

        <Link to="/home">Home</Link>

        <Dropdown
          id="NavDropdown"
          options={{
            alignment: 'left',
            autoTrigger: true,
            closeOnClick: true,
            constrainWidth: true,
            container: null,
            coverTrigger: true,
            hover: false,
            inDuration: 150,
            onCloseEnd: null,
            onCloseStart: null,
            onOpenEnd: null,
            onOpenStart: null,
            outDuration: 250
          }}
          trigger={<a href="/home">Lol data{' '}<Icon right>arrow_drop_down</Icon></a>}
        >
        
        <Link to="/champions">Champions</Link>

        </Dropdown>

      </Navbar>
      <SearchSummoner />

      <Switch>
        <Route path="/champions" children={<SearchChampions />} />
        <Route path="/champion/:id" children={<Champion />} />
        <Route path="/summoner/:region/:accountId" children={<Summoner />} />
      </Switch>
        
      </div>
    </Router>


  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
