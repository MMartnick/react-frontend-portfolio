﻿import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Main from './components/js/Main.js';
import Dev from './components/js/Dev.js';
import Design from './components/js/Design.js';
import Art from './components/js/Art.js';

import GameDev from './components/js/Dev/GameDev.js';

import './App.css';

function App() {
    return (
        <BrowserRouter>

            <header className="App-header">
                <p className="headIcon"> Please excuse the mess, this site is still under construction</p>
                <nav>
                    <Link to="/" class="navlink">Main</Link>
                    <Link to="/Dev" class="navlink">Web & Software Development</Link>
                    <Link to="/Design" class="navlink">Graphic Design</Link>
                    <Link to="/Art" class="navlink">Fine Art</Link>
                  
                    <a href="https://www.instagram.com/doom_monsta/" target="_blank">
                        <i class="fab fa-instagram  faHead"></i>
                    </a>
                    <a href="https://github.com/mmartnick/" target="_blank">
                        <i class="fab fa-github faHead"></i>
                    </a>

                    <a href="https://www.linkedin.com/in/matthew-martnick/" target="_blank">
                        <i class="fab fa-linkedin faHead"></i>
                    </a>
                </nav>
            </header>

            <body>
                <Route exact path="/" component={Main} />
                <Route path="/Dev" component={Dev} />
                <Route path="/Design" component={Design} />
                <Route path="/Art" component={Art} />
                <Route path="/GameDev" component={GameDev} />
            </body>



        </BrowserRouter>
    );
}

export default App;