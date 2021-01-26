
import React from 'react';

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

	const trackingId = "G-G8W5Z7JFN1";
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