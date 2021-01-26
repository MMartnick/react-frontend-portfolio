import React from 'react';
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';

import '../css/SoftwareComponent.css';
import DesImages from './Design/DesImages';
import Logos from './Design/Logos';
import Music from './Design/Music';
import Games from './Design/Games';



function Design(props) {

	return (
		<div>
			<section id="pagetitle">
				<p id="topic">Graphic Design</p>
			</section>

			<DesImages></DesImages>
			<Logos></Logos>
			<Music ></Music>
			<Games></Games>
		</div>
	)
}

export default Design;