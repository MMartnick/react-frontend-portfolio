
import React from 'react';

import '../../css/Content.css';

function Logos(props) {
    return (
        <div id="highlight">
            <section >
                <p id="subtitle">Logo Design</p>
                <p id="desc">Description text goes here.</p>
            </section>

            <div className="logos">
                <img src="/images/Design/moto.png" alt="Ramer Motorsports Logo" className="logoImg" />
                <img src="/images/Design/artif.png" alt="Artifical Nocturne Logo" className="logoImg" />
                <img src="/images/Design/nineteen.png" alt="Concept1984 Logo" className="logoImg" />
                <img src="/images/Design/tcp.png" alt="Corporate News Letter Logo" className="logoImg" />
            </div>
        </div>
    )
}

export default Logos;