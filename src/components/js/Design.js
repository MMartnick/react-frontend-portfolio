
import React from 'react';

import Logos from './Design/Logos.js';
import Music from './Design/Music.js';
import GameArt from './Design/GameArt.js';

import '../css/Title.css';

function Design(props) {
    return (

        <div className="container">
            <div className="top">
                <section id="maintitle">
                    <p id="topic">Graphic Design</p>
                </section>
            </div>

            <Logos></Logos>
            <Music></Music>
            <GameArt></GameArt>

        </div>
    )
}

export default Design;