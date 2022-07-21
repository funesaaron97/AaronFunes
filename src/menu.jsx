import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

class Menu extends React.Component{
    render(){
        return(
            <div class = "tab">
                <nav>
                    <Link to='/AaronFunes'>
                        <a class="navbutton">HOME</a>
                    </Link>
                    <Link to='/AaronFunes/about'>
                        <a class="navbutton">ABOUT ME</a>
                    </Link>
                    <Link to='/AaronFunes/code'>
                        <a class="navbutton">CODE</a>
                    </Link>
                    <Link to='/AaronFunes/music'>
                        <a class="navbutton">MUSIC</a>
                    </Link>
                </nav>
            </div>
        );
    }
}

export default Menu;