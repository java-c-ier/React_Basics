import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Nav() {
  return (
    <nav className="flex mt-5 justify-center gap-32">

        {/* <Link to="/">Home</Link>
        <Link to="/user">User</Link>
        <Link to="/about">About</Link> */}

        <NavLink style={ (e) => { 
            return {
                color : e.isActive ? 'tomato' : '', 
                fontWeight : e.isActive ? 'bolder' : '',
                fontSize : e.isActive ? 'large' : ''
            } 
        } } to="/">Home</NavLink>

        <NavLink className={ (e) => {       // Easiest way to apply styles to NavLink
            return [
                e.isActive ? 'text-red-400' : '', 
                e.isActive ? 'font-semibold' : '',
                e.isActive ? 'text-lg' : ''
            ].join(' ')
        } } to="/user">User</NavLink>

        <NavLink className={ (e) => {
            return [
                e.isActive ? 'text-red-400' : '', 
                e.isActive ? 'font-semibold' : '',
                e.isActive ? 'text-lg' : ''
            ].join(' ')
        } } to="/about">About</NavLink>

    </nav>
  )
}

export default Nav