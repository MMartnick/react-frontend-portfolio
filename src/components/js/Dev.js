
import React from 'react';
import ReactGA from 'react-ga';

import { createBrowserHistory } from 'history';

import '../css/Dev.css';


import Outrun from './Dev/OutRun';
import AN from './Dev/AN';
import FinalFantasy from './Dev/FinalFantasy';

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


function Dev(props) {
    return (
        <div>

            <div className="devBanner">
                <section id="maintitle">
                    <p id="topic">Web & Software Development</p>
                </section>
            </div>

            <div>
                <section className="padd">
                    <article className="project">
                        <p className="subDev">Web Development</p>
                        <p className="de">
                            My experience in web development covers several different technologies.
                            My background is heavily development in the MERN stack, and I received a corresponding certification from the University of Texas in Austin in 2018.
                            However, I have also crossed into other areas as well and while I excel in frontend development I have worked in backend.
                            Some of those technologies include Java with the JSP framework on the corporate level, Angular 2+, Apache server, and some of the Microsoft Office Suite of development tools like Access and SharePoint.
                       </p>

                        <p className="de">
                            Below I've included links to some of my previous web projects. 
                            Most of these projects are older and not reflective of my current skillest, in the coming months I will be updating/replacing these to better demonstrate my abilities. 
                            You're understanding is appreciated. 
                       </p>
                        <p> &nbsp; </p>
                    </article>

                    <p className="padDev">
                        &nbsp;
                    </p>

                    <div className="websites">
                        <article className="weblink">
                            <a href="https://immense-castle-94064.herokuapp.com/login.html" target="_blank">
                                <img src="images/Dev/test.png" alt="Ramer Motorsports Logo" className="webImg" />
                                <p class="sublink"> >> See More... </p>
                            </a>
                        </article>
                        <article className="weblink">
                            <a href="http://chimneyelves.com/" target="_blank">
                                <img src="images/Dev/test.png" alt="Ramer Motorsports Logo" className="webImg" />
                                <p class="sublink"> >> Chimney Elves  - Business Website </p>
                            </a>
                        </article>
                        <article className="weblink">
                            <a href="https://mmartnick.github.io/GifTastic/" target="_blank">
                                <img src="images/Dev/test.png" alt="Ramer Motorsports Logo" className="webImg" />
                                <p class="sublink"> GifTastic - Gif API search app</p>
                            </a>
                        </article>
                        <article className="weblink">
                            <a href="https://immense-castle-94064.herokuapp.com/login.html" target="_blank">
                                <img src="images/Dev/test.png" alt="Ramer Motorsports Logo" className="webImg" />
                                <p class="sublink"> >> FridgEd - Recipe Sharing Social Media</p>
                            </a>
                        </article>
                    </div>
                </section>

                <section className="padd">
                    <article className="project">
                        <p className="subDev"> Game Development</p>
                        <p className="de">
                            Game development has been mostly a newer experience largely guided by my master's degree program through Full Sail University, the MS in Mobile Game Development.
                            I have experimented with web-based games built in JavaScript with jQuery as well as the Impact game engine.
                            I have also worked with Cocos 2D in C++, but my primary experience has been working in C# with the unity framework.
                            My current project is top down roleplaying game using advanced pathfinding and mobile device light sensor data, my secondary project has been an endless runner currently available on the Google Play Store.
                            Follow the link below to view my thesis presentation for more information on these projects.

                        <p>
                                &nbsp;
                            <a href="https://spark.adobe.com/page/0MDSRprz9ILgm/" target="_blank" className="sublink">
                                    >> See More...
                            </a>
                            </p>
                        </p>
                    </article>

                    <p>
                        &nbsp;
                    </p>

                    <Outrun></Outrun>
                    &nbsp;

                    <AN></AN>
                    &nbsp;

                    <FinalFantasy></FinalFantasy>


                </section>
            </div>
        </div>
    )
}

export default Dev;