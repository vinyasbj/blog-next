import React from 'react';
// import styles from './Navbar.module.scss';
// import { fab } from '@fortawesome/free-regular-svg-icons'
import FontAwesome from 'react-fontawesome'
import { Form,FormControl,Button } from 'react-bootstrap';
import Link from 'next/link'
import Router from "./router";
class Navbar extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            active: false
        }
    }
    openSearch(){
        if (this.state.active === true) {
            this.setState({active: false})
        } else {
            this.setState({active: true})
        }
    }
    componentDidMount(){
        this.nameInput.focus();
    }
    render() {
      return (
        <header id="header">
            <h1><a href="#">Future Imperfect</a></h1>
            <nav className="links">
                <ul>
                   <Router/>
                </ul>
            </nav>
            <nav className="main">
                <ul>
                    <li className="search">
                        <a className="fa-search" href="#search" onClick={() => this.openSearch()}>Search</a>
                        <form id="search" method="get" action="#" className={this.state.active !== true ? '' : 'visible'}>
                            <input ref={input => { this.nameInput = input; }} type="text" name="query" placeholder="Search" className="active" />
                        </form>
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