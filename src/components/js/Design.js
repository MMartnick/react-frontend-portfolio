import React from 'react';
import ReactGA from 'react-ga';

import { createBrowserHistory } from 'history';

import Logos from './Design/Logos.js';
import Music from './Design/Music.js';
import GameArt from './Design/GameArt.js';

import '../css/Des.css';

const trackingId = "UA-175309816-1";
const history = createBrowserHistory();

ReactGA.initialize(trackingId);
ReactGA.set({
    category: "Browser History",
    action: "User came to des page",
})

history.listen(location => {
    ReactGA.set({ page: location.pathname }); // Update the user's current page
    ReactGA.pageview(location.pathname); // Record a pageview for the given page
});

function Design(props) {
    return (

        <div className="container">
            <div className="desBanner">
                <section id="maintitle">
                    <p id="topic">Graphic Design</p>
                </section>
            </div>

            <Logos></Logos>
            <Music></Music>
            <GameArt></GameArt>

        </div>
    )
}

export default Design;