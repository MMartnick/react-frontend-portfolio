
import React from 'react';
import ReactGA from 'react-ga';

import { createBrowserHistory } from 'history';

import '../css/Main.css';

import Name from './Name';

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


function Main(props) {
    return (
        <div className="container">
            <Name></Name>


            <div>
                <p className="mainMessage">We're still undergoing development so please excuse the mess.</p>
            </div>
        </div>


    )
}

export default Main;