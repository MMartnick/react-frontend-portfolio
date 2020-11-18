
import React from 'react';

import '../../css/SoftwareComponent.css';


function OutRun(props) {
    return (
        <div className="project">


            <article className="leftContent">
                <p className="subGame">Out Runner - </p>
                <p className="de">
                    Out Runner is a standard endless run and gun platformer designed for mobile devices.
                    Although it is a relatively basic project the intent for it was to build a game through to completion and gain experience in deploying it to an active user base through the Google Play Store.
                    After its initial release, I had the opportunity to receive user feedback and push updates to address any concerns players had such as responsive design for specific devices.
                    This project was built in OOP C# with the Unity game engine framework, implemented the Unity Ads and Analytics features, and deployed as an Android App Bundle.

                    <a href="https://play.google.com/store/apps/details?id=com.DefaultCompany.OutRunner" target="_blank" class="sublink">
                        >> Get it here...
                    </a>
                    </p>
                </article>

                           <div className="rightContent">

     </div>
        </div>
    )
}

export default OutRun;