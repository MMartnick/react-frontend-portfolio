
import React from 'react';
import ReactGA from 'react-ga';

import { createBrowserHistory } from 'history';

import '../css/Main.css';

import Name from './Name';


function Main(props) {

	const trackingId = "UA-175309816-1";
	const history = createBrowserHistory();

	ReactGA.initialize(trackingId);
	ReactGA.set({
		category: "Browser History",
		action: "User came to main page",
	})

	history.listen(location => {
		ReactGA.set({ page: location.pathname }); // Update the user's current page
		ReactGA.pageview(location.pathname); // Record a pageview for the given page
	});

	return (
		<div>
			<Name></Name>
		</div>


	)
}

export default Main;