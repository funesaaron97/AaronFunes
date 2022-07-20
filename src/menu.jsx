import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

class Menu extends React.Component{
    render(){
        return(
            <div class = "tab">
                <nav>
                    <Link to='/'>
                        <button><a>HOME</a></button>
                    </Link>
                    <Link to='/about'>
                        <button><a>ABOUT ME</a></button>
                    </Link>
                    <Link to='/code'>
                        <button><a>CODE</a></button>
                    </Link>
                    <Link to='/music'>
                        <button><a>MUSIC</a></button>
                    </Link>
                </nav>
            </div>
        );
    }
}

export default Menu;