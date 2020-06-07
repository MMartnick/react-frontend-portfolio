
import React from 'react';

import '../../css/Content.css';

function OutRun(props) {
    return (
        <div className="highlight">
            <section >
                <p className="subtitle">Out Runner</p>
                <p className="desc">
                    Out Runner is a standard endless run and gun platformer designed for mobile devices.
                    Although it is a relatively basic project the intent for it was to build a game through to completion and gain experience in deploying it to an active user base through the Google Play Store.
                    After its initial release, I had the opportunity to receive user feedback and push updates to address any concerns players had such as responsive design for specific devices.
                    This project was built in OOP C# with the Unity game engine framework, implemented the Unity Ads and Analytics features, and deployed as an Android App Bundle.
                                         <p> &nbsp; </p>
                    <a href="https://play.google.com/store/apps/details?id=com.DefaultCompany.OutRunner" target="_blank" class="sublink">
                        >> Get it here...
                    </a>
                    <p> &nbsp; </p>
                    </p>

            </section>

            <div>
                <iframe className="gameVid" width="560" height="315" src="https://www.youtube.com/embed/4uTy1rmPGwk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <img src="/images/Design/outrun.png" alt="Outrunner Logo" className="logoImg" />
            </div>
        </div>
    )
}

export default OutRun;