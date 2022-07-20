import React from 'react';
import './App.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faReact } from '@fortawesome/free-brands-svg-icons';
import{
    faLinkedin,
    faGithub,
    faFacebook,
    faSpotify,
} from "@fortawesome/free-brands-svg-icons";


class Media extends React.Component{
    render(){
        return(
            <div class="social-container">
                <div>
                    <h1 class="connect"> Connect With Me!</h1>
                    <a href="https://www.linkedin.com/in/aaron-funes-8ab7a5138/" className="linkedin social"><FontAwesomeIcon icon ={faLinkedin} size="4x"/></a>
                    <a href="https://github.com/funesaaron97" className="git social"><FontAwesomeIcon icon ={faGithub} size="4x"/></a>
                    <a href="https://www.facebook.com/doubleayy" className="fb social"><FontAwesomeIcon icon ={faFacebook} size="4x"/></a>
                    <a href="https://open.spotify.com/artist/6oroEOw4Ap3wkBDvXEcpda" className="spotify social"><FontAwesomeIcon icon ={faSpotify} size="4x"/></a>
                </div>
                <div class="reactplug">
                    <span> Built with <FontAwesomeIcon icon={faReact}/> *Not yet optimized for Mobile Use*</span>
                </div>
            </div>

        );
    }
}


export default Media;