import React from 'react';
import { Link } from 'react-router-dom'

const Nav = () => (
  <div className='site-header'>
    <nav className='nav-primary'>
      <ul className='menu genesis-nav-menu menu-primary'>
          <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-29340">
            <Link to='/'>About Me</Link>
          </li>
         <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-29340">
            <Link to='/applications'>Applications</Link>
          </li>
        <li  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-29340">
          <Link to='/resume'>Resume</Link>
        </li>     
      </ul>
    </nav>
  </div>
)

export default Nav