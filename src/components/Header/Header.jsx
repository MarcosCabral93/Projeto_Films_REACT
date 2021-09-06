import React, { Component } from 'react';
import './Header.css';
import {Link} from 'react-router-dom'
class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <header >
                <Link to='/'> Home</Link>
                <Link to="/Sobre"> Sobre</Link>
            </header>
         );
    }
}
 
export default Header;