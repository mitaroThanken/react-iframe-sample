import React from 'react';
import logo from './logo.svg';
import './App.css';
import { IFrame } from '@mitarothanken/react-iframe';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <iframe title="test iframe" width="560" height="315" src="https://www.youtube.com/embed/g68V_HAVurE" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <IFrame title="test IFrame" width="560" height="315" src="https://www.youtube.com/embed/6bbFuPFaEjs" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></IFrame>
        <IFrame title="custom IFrame test" head={<title>custom IFrame test</title>}>
          <h1>Hello world</h1>
        </IFrame>
      </header>
    </div>
  );
}

export default App;
