
import React from 'react';

import '../../css/Content.css';

function AN(props) {
    return (
        <div className="highlight">
            <section >
                <p className="subtitle">Artificial Nocturne</p>
                <p className="desc">
                    Artificial Nocturne is currently in the demo state. 
                    It is a top-down role-playing game that utilizes the mobile device light sensor to adjust the players visibility of the game world. 
                    Core technical features for this project are the implementation of the device light sensor, the A-Star pathfinding algorithm, and player/enemy data sheets that determine damage dealt based on various attribute statistics.
                    This project was built in OOP C# with the Unity game engine framework.</p>
            </section>

            <div>
                <iframe className="gameVid" width="560" height="315" src="https://www.youtube.com/embed/U6FhO1oyyFs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <img src="/images/Dev/uiDemo.png" alt="Artificial Nocturne UI" className="anImg" />
            </div>
        </div>
    )
}

export default AN;