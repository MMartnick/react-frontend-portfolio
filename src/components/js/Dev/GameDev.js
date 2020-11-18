
import React from 'react';

import '../../css/SoftwareComponent.css';

function GameDev(props) {
    return (
        <div className="project">            
            <article className="leftContent">
            <p className="subDev">Mobile App & Game Development</p>
            <p className="de">
            Game development has been mostly a newer experience largely guided by my master's degree program through Full Sail University, the MS in Mobile Game Development.
            I have experimented with web-based games built in JavaScript with jQuery as well as the Impact game engine.
            I have also worked with Cocos 2D in C++, but my primary experience has been working in C# with the unity framework.
            My current project is top down roleplaying game using advanced pathfinding and mobile device light sensor data, my secondary project has been an endless runner currently available on the Google Play Store.
            Follow the link below to view my thesis presentation for more information on these projects.
           {/* <p>
            &nbsp;
            <a href="https://spark.adobe.com/page/0MDSRprz9ILgm/" target="_blank" className="sublink">
            >> See More...
            </a>
            </p> */}
            </p>
            </article>

                                       <div className="rightContent">
           <img src="/images/Design/outrun.png" alt="Outrunner Logo" className="devImg" />
           <iframe className="gameVid" width="560" height="315" src="https://www.youtube.com/embed/4uTy1rmPGwk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>             
           </div>



        </div>
    )
}

export default GameDev;