
import React from 'react';

import '../../css/Dev.css';

function FinalFantasy(props) {
    return (
        <div className="highlightDev">
            <section >
                <p className="subtitleDev">Web Based RPG Battle</p>
                <p className="descDev">
                    My first game project, this was an attempt to mimic the classic turn based Final Fantasy game series in HTML, CSS, JavaScript, and jQuery and deployed as a browser game.
                    This was put together in two weeks as a class project and while the final result is a bit buggy it proved to be a good experience for learning to build functional UI elements and some game logic in web technologies.
                    This game also made use of geolocation features to populate special enemy characters at certain latitude/longitude coordinates and a weather API to change the playfield based on the locations current temperature.
                     <p> &nbsp; </p>
                    <a href="https://project-one-165ac.firebaseapp.com/" target="_blank" class="sublink">
                        >> Play it here...
                    </a>
                    <p> &nbsp; </p>
                    </p>
            </section>

            <div className="softContent">
                <i class="fab fa-html5 faDev"></i>
                <i class="fab fa-css3-alt faDev"></i>
                <i class="fab fa-js-square faDev"></i>
         
                <img src="/images/Dev/ffScene.png" alt="RPG Scene" className="rpgImg" />
            </div>
            <p className="padDev">
                &nbsp;
                    </p>  
            <p className="padDev">
                &nbsp;
                    </p>  
        </div>
    )
}

export default FinalFantasy;

