import React from 'react';
import './NavBar.css';
import logo from '../../resources/Group 86.png';

const NavBar = () => {

    return (
        <div>
            <navbar class="navbar navbar-expand-lg navbar-light">
                <div className="col-md-6">
                    <img src={logo} className="logo" alt="" />
                </div>
                <div className="col-md-6">
                    <button className="border-0 navbar-toggler align-item-right" type="button" data-toggle="collapse" data-target="#nava">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse text-center navbar-collapse" id="nava">
                        <ul className="navbar-nav ml-auto">

                            <li className="nav-item mx-2">
                                <a className="nav-link text-dark" href="#home">Home</a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link text-dark" href="#about">About</a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link text-dark" href="#services">Services</a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link text-dark" href="#pricing">Pricing</a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link text-dark" href="#team">Our Team</a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link text-dark" href="#contact"><button type="button" class="btn btn-primary">Contact Us</button></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </navbar>
        </div>
    );
};

export default NavBar;