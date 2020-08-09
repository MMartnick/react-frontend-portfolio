
import React from 'react';

import '../../css/Des.css';

function Music(props) {
    return (
        <div className="highlightDes">
            <section >
                <p className="subtitleDes">Album Covers</p>
                <p className="descDes">
                    Album art has always been something I have enjoyed doing and can cross the borders of photography, graphic design, typography, and illustration.
                    Similarly creating album art requires the same skillset as other forms of design while giving space for more creative freedom.
                    It is rare that album art won't require some sort of digital image manipulation and my experience on projects of this sort has helped to further my design skills and expertise with the Adobe Suite since before taking up a formal education.
                    </p>
            </section>

            <div className="albums">
                <img src="/images/Design/mediate.jpg" alt="SazFCR - Mediator" className="albumImg" />
                <img src="/images/Design/sub-1.jpg" alt="Clockwork Lotur - Self Titled" className="albumImg" />
                <img src="/images/Design/bloom.jpg" alt="SazFCR - Bloom" className="albumImg" />
            </div>

            <p className="pad">
                &nbsp;
                    </p>  
        </div>
    )
}

export default Music;