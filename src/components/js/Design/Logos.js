
import React from 'react';

import '../../css/Content.css';

function Logos(props) {
    return (
        <div className="highlight">
            <section >
                <p className="subtitle">Logo Design</p>
                <p className="desc">                            
                    During my Associate degree program, I had majored in Digital/Multimedia and Information Resources Design where I had studied in practice various facets of design with the Adobe Suite. 
                    While it was highly focused on user experience/user interface design, the program also covered graphic design for print along with audio/video editing.  
                    While in the program I found that I enjoyed logo design and actively sought out freelance work designing logos for small businesses and individuals.
                    </p>
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