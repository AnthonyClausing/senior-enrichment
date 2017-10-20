import React, {Component} from 'react';
import {render} from 'react-dom';
import { Link } from 'react-router-dom'
export default class Header extends Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div>
            <header>
            <Link to="/">
                <button>Home</button>
            </Link>
            <Link to="/campuses">
            <button>Campuses</button>
            </Link>
            <Link to="/students">
                <button>Students</button>
            </Link>
            </header>
            <hr></hr>
            </div>
        )
    }
}

