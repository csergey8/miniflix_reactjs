import React, { Component } from 'react';
import { Link } from 'react-router';
import { login, logout, isLoggedIn } from '../utils/AuthService';
import '../App.css';


class Nav extends Component {


    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="navabar header">
                    <Link className="navbar-brand" to="/">Miniflix</Link>
                </div>
                <ul className="nav navbar-nav">
                    <li>
                        <Link to="/">All videos</Link>
                    </li>
                    <li>
                        {
                            ( isLoggedIn() ) ? <Link to="/upload">Upload Videos</Link> : ''
                        }
                    </li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                    <li>
                        {
                            (isLoggedIn()) ? 
                            (<button className="btn btn-danger log" onClick={() => logout()}>Logout</button>) : 
                            (<button className="btn btn-info log" onClick={() => login()}>Login</button>)
                        }
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Nav;