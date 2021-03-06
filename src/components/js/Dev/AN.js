
import React from 'react';

import '../../css/SoftwareComponent.css';
import '../../css/Common.css';

function AN(props) {
	return (
		<div className="project">
			<article className="leftContent">
				<p className="articleTitle">Artificial Nocturne - </p>
				<p className="desc">
					Artificial Nocturne is currently in the demo state.
					It is a top-down role-playing game that utilizes the mobile device light sensor to adjust the players visibility of the game world.
					Core technical features for this project are the implementation of the device light sensor, the A-Star pathfinding algorithm, and player/enemy data sheets that determine damage dealt based on various attribute statistics.
                    This project was built in OOP C# with the Unity game engine framework.</p>
			</article>

			<div className="rightContent">
				<img src="/images/Design/artif.png" alt="Artificial Nocturne UI" className="devImg" />
				<iframe className="gameVid" width="560" height="315" src="https://www.youtube.com/embed/nAPBIC37qZ4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

			</div>
		</div>
	)
}

export default AN;