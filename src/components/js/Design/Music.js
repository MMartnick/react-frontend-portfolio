
import React from 'react';

import '../../css/Content.css';

function Music(props) {
    return (
        <div className="highlight">
            <section >
                <p className="subtitle">Album Covers</p>
                <p className="desc">Description text goes here.</p>
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