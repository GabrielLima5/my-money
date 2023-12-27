import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <header className="main-header">
        <a href="/#/" className="logo">
            <span className="logo-lg">
                <i className="fa fa-money"></i>
                <b>My</b>Money
            </span>
        </a>
        <nav className="navbar navbar-static-top">
            <a href className="sidebar-toggle" data-toggle="offcanvas"></a>
        </nav>
    </header>
  )
}

export default Header