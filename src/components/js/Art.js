
import React from 'react';
import ReactGA from 'react-ga';

import { createBrowserHistory } from 'history';

import '../css/Main.css';
import ArtImages from './Art/ArtImages';
import Painting from './Art/Painting';
import Exhibitions from './Art/Exhibitions';



function Art(props) {

	return (
		<div>
			<section id="pagetitle">
				<p id="topic">Fine Art</p>
			</section>

			<ArtImages></ArtImages>
			<Painting></Painting>
			<Exhibitions></Exhibitions>
		</div>
	)
}

export default Art;