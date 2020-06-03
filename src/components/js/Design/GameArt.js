
import React from 'react';

import '../../css/Content.css';

function GameArt(props) {
    return (
        <div id="highlight">
            <section >
                <p id="subtitle">Game Art</p>
                <p id="desc">Description text goes here.</p>
            </section>

            <div className="gameart">
                <img src="/images/Design/greentxt.jpg" alt="Character texture from unfinished game" className="gameImg" />
                <img src="/images/Design/building.jpg" alt="Building texture from unfinished game" className="gameImg" />
                <img src="/images/Design/testsprite.png" alt="Spritesheet for Artificial Nocturne" className="gameImg" />
                <img src="/images/Design/whitetxt.jpg" alt="Character texture from unfinished game" className="gameImg" />
            </div>

            <div className="pad"></div>
        </div>
    )
}

export default GameArt;