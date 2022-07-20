import React from 'react';
import './App.css';
import Ilay from "./ilay.jpg";

class Music extends React.Component{
    render(){
        return(
            <div>
                <div>
                    <header className="music-header">
                        <div class="title">
                            <span>I am
                                <div class="box">A Musician</div>
                            </span>
                        </div>
                    </header>
                </div>
                <div class="container">
                    <body>
                        <div class="codestuff columns">
                            <div class ="wslink column1">
                                <a href="https://open.spotify.com/track/5GsohSzyf1LR0UvF7JX7i3?si=49ee205e165a4b1a"><img src={Ilay} width="400" height="400"/></a>
                            </div>
                            <div class="column2">
                                <h1>I Lay - Charlie's Bane</h1>
                                <p> Check out this song I wrote with my band from college! I played lead guitar and served as the Mixing and Mastering Engineer for the song. This was accomplished using the Ableton Live 9 suite.</p>
                                <p>Click the image to check out the song!</p>
                            </div>
                        </div>
                    </body>
                </div>
            </div>
        );
    }
}

export default Music;