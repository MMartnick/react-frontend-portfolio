
import React from 'react';
import ReactGA from 'react-ga';

import { createBrowserHistory } from 'history';

import WebDev from './Dev/WebDev';
import GameDev from './Dev/GameDev';
import Outrun from './Dev/OutRun';
import AN from './Dev/AN';
import FinalFantasy from './Dev/FinalFantasy';

function Dev(props) {

	const trackingId = "UA-175309816-1";
	const history = createBrowserHistory();

	ReactGA.initialize(trackingId);
	ReactGA.set({
		category: "Browser History",
		action: "User came to dev page",
	})

	history.listen(location => {
		ReactGA.set({ page: location.pathname }); // Update the user's current page
		ReactGA.pageview(location.pathname); // Record a pageview for the given page
	});

	return (
		<div>
			<section id="pagetitle">
				<p id="topic">Web & Software Development</p>
			</section>

			<div>
				<section>
					<WebDev></WebDev>
					<GameDev></GameDev>
					<Outrun></Outrun>
					<AN></AN>
					{/* <FinalFantasy></FinalFantasy> */}
				</section>
			</div>
		</div>
	)
}

export default Dev;