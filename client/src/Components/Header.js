import React, { Component } from 'react';
// import { Navbar, Nav, NavItem } from 'react-bootstrap';
// To use routing functionalities
import { BrowserRouter as Router, Link } from 'react-router-dom';
import '../index.css';

class Header extends Component {
    render() {
        return (

            <div>


                {/* <Navbar.Header>
                        <Navbar.Brand>
                            <a href="javascript:void(0)">MERN Stack CRUD Operations</a>
                        </Navbar.Brand>
                    </Navbar.Header> */}
                <ul>
                    <a href="/">Home</a>


                    <a href="/addemployee" style={{ "marginLeft": "5px" }}>Add New Employee</a>


                </ul>
            </div>

        );
    }
}
export default Header;