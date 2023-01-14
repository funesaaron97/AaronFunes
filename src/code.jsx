import React from 'react';
import './App.css';
import tictactoe from "./tictactoe.PNG";
import websitepic from "./websitepic.PNG";
import towersofhanoi from "./Towers_of_Hanoi_React.png";
import crypto from "./crypto.PNG";

class Code extends React.Component {
    render() {
        return(
            <div>
                <div>
                    <header className="code-header">
                        <div class="title">
                            <span>
                            I am
                                <div class="box">a Coder</div>
                            </span>
                        </div>
                    </header>
                </div>
                <div class="container">
                    <body>
                        <div class="codestuff columns">
                            <div class ="wslink column1">
                                <a href="https://github.com/funesaaron97/AaronFunes"><img src={websitepic} width="400" height="400"/></a>
                            </div>
                            <div class="column2">
                                <h1>Portfolio Website</h1>
                                <p> I built this current website with javascript, html, css, and the React framework. In this project, I utilized React's core feature of jsx class components and routed them together using the React Router library. </p>
                                <p> Click the image to check out the source code!</p>
                            </div>
                        </div>
                        <div class="codestuff columns">
                            <div class ="wslink column1">
                                <a href="https://funesaaron97.github.io/towers_of_hanoi/"><img src={towersofhanoi} width="400" height="400"/></a>
                            </div>
                            <div class="column2">
                                <h1>Towers of Hanoi</h1>
                                <p> I recreated the mathematical game Towers of Hanoi in both ReactJS and Python. For the Python method, I utilized Linked Lists and Nodes as a way to manipulate the abstract Stack Data Structure. In the ReactJS version, I modified the stack manipulation using arrays and then utilized the useState hook to affect the DOM with Javascript.  </p>
                                <p> Click the image to check out the game! Click <a href ="https://github.com/funesaaron97/towers_of_hanoi">here</a> for source code! Click <a href = "https://github.com/funesaaron97/Towers-of-Hanoi">here</a> for the Linked Lists Python version source code!</p>
                            </div>
                        </div>
                        <div class="codestuff columns">
                            <div class ="wslink column1">
                                <a href="https://funesaaron97.github.io/price_monitor/"><img src={crypto} width="400" height="400"/></a>
                            </div>
                            <div class="column2">
                                <h1>Crypto Currency Price Monitor</h1>
                                <p> I programmed a Crypto Currency Price checker utilizing Coingecko's free API services. I constructed the App using ReactJS's core features of useEffect and functional components, in addition to utilizing the package Axios to deal with promises and JSON objects.  </p>
                                <p> Click the image to check out the App! Click <a href ="https://github.com/funesaaron97/price_monitor">here</a> for source code!</p>
                            </div>
                        </div>
                        <div class="codestuff columns">
                            <div class ="tttlink column1">
                                <a href="https://github.com/funesaaron97/tictactoe"><img src={tictactoe} width="400" height="400"/></a>
                            </div>
                            <div class="column2">
                                <h1>Tic Tac Toe</h1>
                                <p> Utilizing Python and the command terminal, I programmed Tic Tac Toe.  In this project, I used the programming principles of For and While Loops, in addition to conditionals and arrays to recreate this classic game.</p>
                                <p> Click the image to play the game and to check out the source code!</p>
                            </div>
                        </div>
                    </body>
                </div>
            </div>
        );
    }
}

export default Code;