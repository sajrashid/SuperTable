import React, { useEffect, useState } from 'react';
import './topMenu.css';
import { NavLink } from 'react-router-dom'
import { setTheme  } from '../../helpers/setTheme'

const TopMenu = props => {
    const [togClass, setTogClass] = useState('dark');
    let theme = localStorage.getItem('theme');
    const handleOnClick = () => {
        if (localStorage.getItem('theme') === 'theme-dark') {
            setTheme('theme-light');
            setTogClass('light')
        } else {
            setTheme('theme-dark');
            setTogClass('dark')
        }
      }

      useEffect(() => {
        if (localStorage.getItem('theme') === 'theme-dark') {
            setTogClass('dark')
        } else if (localStorage.getItem('theme') === 'theme-light') {
            setTogClass('light')
        }
    }, [theme])
    return (

        <div className="ui topmenu stackable menu">
            <div className="item">
                <NavLink to='/' exact={true} >
                    <i aria-hidden="true" className="home icon 2x" ></i>
                    Home
                </NavLink>
            </div>
            <div className="item">
                <NavLink to='/examples' >
                    <i aria-hidden="true" className="lab icon" ></i>
                    Examples
                </NavLink>
            </div>
            <div className="container--toggle">
            {
                togClass === "light" ?
                <input type="checkbox" id="toggle" className="toggle--checkbox" onClick={handleOnClick} checked />
                :
                <input type="checkbox" id="toggle" className="toggle--checkbox" onClick={handleOnClick} />
            }
            <label htmlFor="toggle" className="toggle--label">
                <span className="toggle--label-background"></span>
            </label>
        </div>
        </div>
    )
}

export default TopMenu