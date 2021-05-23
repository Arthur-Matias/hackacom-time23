import React from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import Routes from './Routes';
import './global.css'

function App() {
  return (
    <Layout>
      <Routes />
    </Layout>
  );
}

export default App;
