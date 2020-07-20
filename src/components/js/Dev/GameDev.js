
import React from 'react';
import { Link } from 'react-router-dom';

import AN from './AN';
import Outrun from './OutRun';
import FinalFantasy from './FinalFantasy.js';

import '../../css/Main.css';

function GameDev(props) {
    return (
        <div>
            <div className="devBanner">
                <section id="maintitle">
                    <p id="topic">Web & Software Development</p>
                </section>
            </div>

            <AN></AN>
            <p className="pad"> </p>
            <p className="pad"> </p>
            <Outrun></Outrun>
            <p className="pad"> </p>
            <p className="pad"> </p>
            <FinalFantasy></FinalFantasy>
        </div>
    )
}

export default GameDev;