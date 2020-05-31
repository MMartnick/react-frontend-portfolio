
import React from 'react';

import '../css/Header.css';


class Header extends React.Component {
    render() {
        return (
            <header>
                <div>
                    <nav>
                        <a href="index.html" class="navlink">Home</a>
                        <a href="#dev" class="navlink">Web Dev</a>
                        <a href="#design" class="navlink">Graphic Design</a>
                        <a href="#art" class="navlink">Fine Art</a>

                        <a href="https://www.instagram.com/mmartnick/" target="_blank">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a href="https://github.com/Martnick1/" target="_blank">
                            <i class="fab fa-github"></i>
                        </a>

                        <a href="https://www.linkedin.com/in/matthew-martnick/" target="_blank">
                            <i class="fab fa-linkedin"></i>
                        </a>
                    </nav>
                </div>
            </header>
        )
    }
}

export default Header;