import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Main from './components/js/Main.js';
import Dev from './components/js/Dev.js';
import Design from './components/js/Design.js';
import Art from './components/js/Art.js';

import './App.css';


function App() {

	useEffect(() => {
		ReactGA.initialize('G-G8W5Z7JFN1')
		ReactGA.pageview(window.location.pathname + window.location.search)
	}, [])

	const ClickHandler = () => {
		ReactGA.event({
			category: 'Link',
			action: 'Nav to Github'
		})
		//alert('Send to Google')
	}


	return (
		<BrowserRouter>

			<div >
				<header className="App-header">
					<nav>
						<Link to="/" class="navlink">Main</Link>
						<Link to="/Dev" class="navlink">Web & Software Development</Link>
						<Link to="/Design" class="navlink">Graphic Design</Link>
						<Link to="/Art" class="navlink">Fine Art</Link>

						<a href="https://github.com/mmartnick/" target="_blank" onClick={ClickHandler}>
							<i class="fab fa-github faHead"></i>
						</a>

						<a href="https://www.behance.net/mattMartnick" target="_blank">
							<i class="fab fa-behance-square faHead"></i>
						</a>

						<a href="https://www.linkedin.com/in/matthew-martnick/" target="_blank">
							<i class="fab fa-linkedin faHead"></i>
						</a>

						<a href="https://www.instagram.com/doom_monsta/" target="_blank">
							<i class="fab fa-instagram  faHead"></i>
						</a>

					</nav>
				</header>

				<body className="container">

					<Route exact path="/" component={Main} />

					<Route path="/Dev" component={Dev} />

					<Route path="/Design" component={Design} />

					<Route path="/Art" component={Art} />

				</body>
			</div>

		</BrowserRouter>
	);


}

export default App;


//last working commit a455693c87146c53fd884f7f1493e7fa1ce0b687