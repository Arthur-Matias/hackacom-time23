import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import './global.css'
import Wallet from './pages/Wallet';
import Home from './pages/Home';
import Buy from './pages/Buy';
import Donation from './pages/Donation';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/home">
            <Redirect to="/" from="/home" exact />
          </Route>
          <Route path="/" exact component={Home}/>
          <Route path="/wallet" component={Wallet}/>
          <Route path="/buy" component={Buy}/>
          <Route path="/donation" component={Donation}/>
        </Switch> 
      </Layout>
    </BrowserRouter>
  );
}

export default App;
