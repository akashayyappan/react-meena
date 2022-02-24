import React,{Component} from 'react'
import {Link} from 'react-router-dom';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
  } from './navbarElements';
 

    const Navbar = () => {
    return (
        <>
        <Nav>
          <Bars />
    
          <NavMenu>
            <NavLink to='/home' activeStyle>
            HOME
            </NavLink>
            <NavLink to='/Dashboard' activeStyle>
            Dashboard
            </NavLink>
            <NavLink to='/Movies' activeStyle>
            Movies
            </NavLink>
            <Link to="/">
            <NavLink to='/Logout' activeStyle>
            Logout
            </NavLink></Link>
            </NavMenu>
            </Nav>
            </>
    )
}

export default Navbar;