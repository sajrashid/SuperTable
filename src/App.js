import React, {  useEffect } from "react";
import './App.css';
import {BrowserRouter,  Switch, Route } from 'react-router-dom'
import Home from './pages/home'
import Examples from './pages/examples'
import TopMenu from './components/menu/topMenu'
import { keepTheme } from './helpers/setTheme';

function App() {
      useEffect(() => {
        keepTheme();
    })
  return (
    <div className="App">
      
     
      <BrowserRouter>
      <header className="App-header">
      <TopMenu  />
      </header>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/examples' component={Examples} />
        </Switch>
        </BrowserRouter>
        <div className='contentWrap'>
      </div>
    </div>
  );
}

export default App;
