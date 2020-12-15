
import React from 'react';
import ReactGA from 'react-ga';

import { createBrowserHistory } from 'history';

import '../css/Main.css';
import ArtImages from './Art/ArtImages';
import Painting from './Art/Painting';
import Exhibitions from './Art/Exhibitions';



function Art(props) {

	const trackingId = "UA-175309816-1";
	const history = createBrowserHistory();

	ReactGA.initialize(trackingId);
	ReactGA.set({
		category: "Browser History",
		action: "User came to art page",
	})

	history.listen(location => {
		ReactGA.set({ page: location.pathname }); // Update the user's current page
		ReactGA.pageview(location.pathname); // Record a pageview for the given page
	});

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