import React from 'react'
import './topMenu.css';
import {BrowserRouter, NavLink } from 'react-router-dom'
const TopMenu = props => {


        return (
          
            <div className="ui topmenu stackable menu">
                    <div className="item">
                          <BrowserRouter>
                        <NavLink to='/' exact={true} >
                            <i aria-hidden="true" className="home  icon 2x" ></i>
                            Home
                         </NavLink>
                         </BrowserRouter>
                    </div>
                    <div className="item">
                      <BrowserRouter>
                        <NavLink to='/examples' >
                            <i aria-hidden="true" className="lab  icon" ></i>
                            Examples
                        </NavLink>
                        </BrowserRouter>
                    </div>
                </div>
              
      )
}

export default TopMenu
