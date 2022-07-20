import React from 'react';
import './App.css';
import tictactoe from "./tictactoe.PNG";
import websitepic from "./websitepic.PNG";

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
                                <a href="https://github.com/funesaaron97/Aaron-Funes-Website"><img src={websitepic} width="400" height="400"/></a>
                            </div>
                            <div class="column2">
                                <h1>Portfolio Website</h1>
                                <p> I built this current website with javascript, html, css, and the React framework. In this project, I utilized React's core feature of jsx components and routed them together using the React Router library. </p>
                                <p> Click the image to check out the source code!</p>
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