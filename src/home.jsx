import React from 'react';
import './App.css';
import resume from './docs/resume.pdf';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFileAlt} from "@fortawesome/free-solid-svg-icons";


class Home extends React.Component {
    render() {
        return(
            <div class='home-div'>
                <header class='home-header'>
                    <div>
                        <h1 class='text1'>Welcome to My Website</h1>
                    </div>
                </header>
                <div class="home-content">
                    <body>
                        <div class ="home-container">
                            I am
                            <div class ="home-slider">
                                <div class ="home-slider1">Aaron</div>
                                <div class ="home-slider2">a Musician</div>
                                <div class ="home-slider3">Multilingual</div>
                                <div class ="home-slider4">a Coder</div>
                            </div>
                        </div> 
                        <div class="resume">
                            <a href={resume}>Resume <FontAwesomeIcon icon={faFileAlt}/></a>
                        </div> 
                    </body>
                </div>
            </div>
        );
    }
}

export default Home;