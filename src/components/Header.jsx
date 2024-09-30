import React, { useState } from 'react'
import './Header.css'

const Header = () => {
  const [menu,setMenu] = useState(false);
  const handleMenu = () => {
    setMenu(!menu);
  }
  return (
    <div className='header-wrapper'>
        <div className="logo">
            <img src="/assets/imgs/logo.png" alt="Logo" />
        </div>
        <ul className={menu ? "mobile-nav open" : "navbar"}>  
            <li>Popular Items</li>
            <li>Hot Appetizers</li>
            <li>Chicken</li>
            <li>Mutton</li> 
        </ul>
        <div className='menu'>
            <img src="/assets/icons/menu-bar.png" onClick={handleMenu}/>
        </div>
    </div>
  )
}

export default Header