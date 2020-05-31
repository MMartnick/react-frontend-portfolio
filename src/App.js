import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/js/Header';
import Name from './components/js/Name';

function App() {
  return (
    <div className="App">
          <header className="App-header">
              <Header></Header>
          </header>

          <Name></Name>

          {/*      <img src={logo} className="App-logo" alt="logo" />
          <p>
              Edit <code>src/App.js</code> and save to reload.
        </p>
          <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
          >
            
        </a>*/}


    </div>
  );
}

export default App;
