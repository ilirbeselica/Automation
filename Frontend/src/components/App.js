import React from 'react';
import './style.css';
import './bootstrap.css'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Login from './Login'
import Keyword from './Keyword';
import Wordpress from './Wordpress'
import Header from './Header'

const App = () => {
    return ( 
        <Router>
        <div>
        <Route path="/" exact component={Header}/>
        <Route path="/keyword" component={Keyword}/>
        <Route path="/wordpress" component={Wordpress}/>
             


        </div>
        </Router>

    )
}

export default App;