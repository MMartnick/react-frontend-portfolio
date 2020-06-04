
import React from 'react';
import { Link } from 'react-router-dom';

import '../css/Dev.css';

function Dev(props) {
    return (
        <div>

            <div className="top">
                <section id="maintitle">
                    <p id="topic">Web & Software Development</p>
                </section>
            </div>

            <div>
                <section className="padd">
                    <article className="project">
                        <p className="subt">Web Development</p>
                        <p className="de">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et porttitor orci, ut fermentum tellus.
                            Aliquam placerat, dolor in lobortis semper, diam sapien bibendum lectus, eget dictum leo odio id enim.
                            Cras commodo facilisis lorem, quis laoreet mauris sodales eget.
                            Duis pellentesque magna id nisl pretium, ut euismod ante viverra.
                            Praesent facilisis nisi vel scelerisque elementum. Nullam eu varius nulla, interdum sagittis metus.
                            Cras et bibendum felis, eu aliquet enim. Donec dui velit, volutpat sed mattis non, maximus a justo.
                            Nunc vitae ante convallis, sollicitudin eros eget, volutpat leo.
                            Vivamus malesuada auctor auctor. Aenean scelerisque lacinia mi.
                            Phasellus non dui sit amet urna ultricies eleifend nec non eros.
                       </p>
                        <p>
                            &nbsp; <Link to="/GameDev" class="sublink"> >> See More...</Link>
                        </p>
                        <p> &nbsp; </p>
                    </article>

                    <div className="websites">
                        <article className="weblink">
                            <a href="https://immense-castle-94064.herokuapp.com/login.html" target="_blank">
                                <img src="images/Dev/test.png" alt="Ramer Motorsports Logo" className="webImg" />
                                <p class="sublink"> >> See More... </p>
                            </a>
                        </article>
                        <article className="weblink">
                            <a href="https://immense-castle-94064.herokuapp.com/login.html" target="_blank">
                                <img src="images/Dev/test.png" alt="Ramer Motorsports Logo" className="webImg" />
                                <p class="sublink"> >> See More... </p>
                            </a>
                        </article>
                        <article className="weblink">
                            <a href="http://chimneyelves.com/" target="_blank">
                                <img src="images/Dev/test.png" alt="Ramer Motorsports Logo" className="webImg" />
                                <p class="sublink"> >> See More... </p>
                            </a>
                        </article>
                        <article className="weblink">
                            <a href="https://immense-castle-94064.herokuapp.com/login.html" target="_blank">
                                <img src="images/Dev/test.png" alt="Ramer Motorsports Logo" className="webImg" />
                                <p class="sublink"> >> See More... </p>
                            </a>
                        </article>
                    </div>
                </section>

                <section className="padd">
                    <article className="project">
                        <p className="subt"> Game Development</p>
                        <p className="de">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et porttitor orci, ut fermentum tellus.
                            Aliquam placerat, dolor in lobortis semper, diam sapien bibendum lectus, eget dictum leo odio id enim.
                            Cras commodo facilisis lorem, quis laoreet mauris sodales eget.
                            Duis pellentesque magna id nisl pretium, ut euismod ante viverra.
                            Praesent facilisis nisi vel scelerisque elementum. Nullam eu varius nulla, interdum sagittis metus.
                            Cras et bibendum felis, eu aliquet enim. Donec dui velit, volutpat sed mattis non, maximus a justo.
                            Nunc vitae ante convallis, sollicitudin eros eget, volutpat leo.
                            Vivamus malesuada auctor auctor. Aenean scelerisque lacinia mi.
                            Phasellus non dui sit amet urna ultricies eleifend nec non eros.
                       </p>
                        <p>
                            &nbsp; <Link to="/GameDev" class="sublink"> >> See More...</Link>
                        </p>
                        <p>
                            &nbsp;
                    </p>
                    </article>
                </section>
            </div>
        </div>
    )
}

export default Dev;