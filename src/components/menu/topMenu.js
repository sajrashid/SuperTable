import React from 'react'
import './topMenu.css';
import { NavLink } from 'react-router-dom'
const TopMenu = props => {

        return (
          
            <div className="ui topmenu stackable menu">
                    <div className="item">
                        <NavLink to='/' exact={true} >
                            <i aria-hidden="true" className="home  icon 2x" ></i>
                            Home
                         </NavLink>
                    </div>
                    <div className="item">
                        <NavLink to='/examples' >
                            <i aria-hidden="true" className="lab  icon" ></i>
                            Examples
                        </NavLink>
                    </div>
                </div>
      )
}

export default TopMenu