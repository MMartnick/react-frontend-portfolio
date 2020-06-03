
import React from 'react';

import '../../css/Content.css';

function Music(props) {
    return (
        <div id="highlight">
            <section >
                <p id="subtitle">Album Covers</p>
                <p id="desc">Description text goes here.</p>
            </section>

            <div className="albums">
                <img src="/images/Design/mediate.jpg" alt="SazFCR - Mediator" className="albumImg" />
                <img src="/images/Design/sub-1.jpg" alt="Clockwork Lotur - Self Titled" className="albumImg" />
                <img src="/images/Design/bloom.jpg" alt="SazFCR - Bloom" className="albumImg" />
            </div>
        </div>
    )
}

export default Music;