import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Home from './pages/home'
import Examples from './pages/examples'
import TopMenu from './components/menu/topMenu'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TopMenu />
      </header>
      <div className='contentWrap'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/examples' component={Examples} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
