
import React from 'react';
import ReactGA from 'react-ga';

import { createBrowserHistory } from 'history';

import '../css/Main.css';
import Images from './Art/Images';

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

function Art(props) {
    return (
        <div>
        <div className="faBanner">
            <section id="maintitle">
                <p id="topic">Fine Art</p>
            </section>
            </div>

            <Images></Images>
            </div>
    )
}

export default Art;