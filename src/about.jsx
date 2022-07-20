import React from 'react';
import './App.css';
import MyImage from "./portrait.jpg"

class About extends React.Component{
    render(){
        return(
            <div>
                <div>
                    <header className = "about-header">
                        <div class="title">
                            <span>I am
                                <div class="box1 box">Aaron</div>
                            </span>
                        </div>
                    </header>
                </div>
                <div class="container">
                    <body>
                        <div class="columns">
                            <div class="column1">  
                                <img src ={MyImage} alt="picofme" width="400" height="400" />
                            </div>
                            <div class="column2">
                                <h1>A Little About Me</h1>
                                <p> 
                                Hello there! My name is Aaron Funes, and I'm a Physics and Italian Grad from Northwestern University pursuing a career in Software Engineering. 
                                I aspire to utilize software and psychology as a catalyst to promote both self and educational growth in individuals.
                                </p>
                                <p>
                                At the moment, I specialize in Front End Development but plan on tackling Fullstack Development combined with Machine Learning in the future!
                                </p> 
                                <p> In addition to programming, I also write, play, and produce music! Check out the projects I'm working on!</p>
                            </div>
                        </div>
                    </body>
                </div>
            </div>
        );
    }
}

export default About;