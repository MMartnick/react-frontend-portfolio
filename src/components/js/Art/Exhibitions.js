
import React from 'react';

import '../../css/GalleryComponent.css';
import '../../css/Common.css';


function Exhibitions(props) {
	return (
		<article className="galleryText">
			<p className="subTitle">Experience and Exhibitions</p>
			<ul className="desc">
				<li className="artItem"><b>2018:</b> Conception Art Collective - Exhibition</li>
				<li className="artItem"><b>2016:</b> The Link - Exhibition</li>
				<li className="artItem"><b>2016:</b> Preposterous Magazine - Publication</li>
				<li className="artItem"><b>2015 - 2016:</b>  Jankura Art Space - Artist in residence</li>
				<li className="artItem"><b>2015:</b> Jeonbuk Art Museum - Exhibition</li>
				<li className="artItem"><b>2015:</b> SYLC Charity Art Fair - Exhibition</li>
				<li className="artItem"><b>2015:</b> 12th Yongson International Art Festival - Exhibition</li>
				<li className="artItem"><b>2013:</b> Northampton Area School District - Extracurricular Art Instructor</li>
				<li className="artItem"><b>2013:</b> FOA Gallery - Exhibition</li>
				<li className="artItem"><b>2012 - 2013:</b> Alternative Gallery - Artist in residence/Youth Art Instructor</li>
			</ul>
		</article>
	)
}

export default Exhibitions;