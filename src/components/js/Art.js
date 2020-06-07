
import React from 'react';

import '../css/Title.css';
import Images from './Art/Images';


function Art(props) {
    return (
        <div>
        <div className="top">
            <section id="maintitle">
                <p id="topic">Fine Art</p>
            </section>
            </div>

            <Images></Images>
            </div>
    )
}

export default Art;