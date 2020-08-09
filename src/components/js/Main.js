
import React from 'react';

import '../css/Main.css';

import Name from './Name';


function Main(props) {
    return (
        <div className="container">
            <Name></Name>


            <div>
                <p className="mainMessage">We're still undergoing development so please excuse the mess.</p>
            </div>
        </div>


    )
}

export default Main;