import React from 'react';
// import styles from './Navbar.module.scss';
// import { fab } from '@fortawesome/free-regular-svg-icons'
import FontAwesome from 'react-fontawesome'
import { Form,FormControl,Button } from 'react-bootstrap';

class Navbar extends React.Component {
    render() {
      return (
        <header id="header">
            <h1><a href="#">Future Imperfect</a></h1>
            <nav className="links">
                <ul>
                    <li><a href="#">Lorem</a></li>
                    <li><a href="#">Ipsum</a></li>
                    <li><a href="#">Feugiat</a></li>
                    <li><a href="#">Tempus</a></li>
                    <li><a href="#">Adipiscing</a></li>
                </ul>
            </nav>
            <nav className="main">
                <ul>
                    <li className="search">
                        <a className="fa-search" href="#search">Search</a>
                    </li>
                    <li className="menu">
                        <a className="fa-bars" href="#menu">Menu</a>
                    </li>
                </ul>
            </nav>
        </header>
      )
    }
  }
export default Navbar;