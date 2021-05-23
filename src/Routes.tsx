import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Wallet from './pages/Wallet';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/wallet" component={Wallet}/>
            </Switch>
        </BrowserRouter>
    )
}