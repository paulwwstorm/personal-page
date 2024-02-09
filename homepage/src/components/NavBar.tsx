import React from 'react'
import '../App.css';
import { NavLink } from 'react-router-dom'

const NavBar: React.FC = () => {
    return (
        <NavLink
            to='/blog'
        >
            Blog
        </NavLink>
    )
}

export default NavBar