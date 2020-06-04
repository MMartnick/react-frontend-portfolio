
import React from 'react';
import { Link } from 'react-router-dom';

import AN from './AN';
import Outrun from './OutRun';
import FinalFantasy from './FinalFantasy.js';

import '../../css/Title.css';

function GameDev(props) {
    return (
        <div>
            <div className="top">
                <section id="maintitle">
                    <p id="topic">Web & Software Development</p>
                </section>
            </div>

            <AN></AN>
            <Outrun></Outrun>
            <FinalFantasy></FinalFantasy>
        </div>
    )
}

export default GameDev;