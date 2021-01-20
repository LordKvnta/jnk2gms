import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import logo from '../logo.svg'

export default class Navbar extends Component {
    render() {
        return (
        <header>
        <nav className='nav'>
        <Link className='brand' to='/'>J2G</Link>
        <ul >
                <li ><Link to='/cards'>Cards</Link></li>
                <li ><Link>Specials</Link></li>
                <li ><Link>Breaks</Link></li>
                <li ><Link>Contact-Us</Link></li>
        </ul>
        <ul>
                <li><Link>Profile</Link></li>
                <li><Link>Cart</Link></li> 
        </ul>
        </nav>   
        </header>
        
        )
    }
}
