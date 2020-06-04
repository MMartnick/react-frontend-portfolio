
import React from 'react';

import '../../css/Content.css';

function Logos(props) {
    return (
        <div className="highlight">
            <section >
                <p className="subtitle">Logo Design</p>
                <p className="desc">Description text goes here.</p>
            </section>

            <div className="logos">
                <img src="images/Design/moto.png" alt="Ramer Motorsports Logo" className="logoImg" />
                <img src="/images/Design/artif.png" alt="Artifical Nocturne Logo" className="logoImg" />
                <img src="/images/Design/nineteen.png" alt="Concept1984 Logo" className="logoImg" />
                <img src="/images/Design/tcp.png" alt="Corporate News Letter Logo" className="logoImg" />
            </div>
        </div>
    )
}

export default Logos;