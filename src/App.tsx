import React from 'react';
import logo from './logo.svg';
import Hello from './compnents/hello'
import LikeButton from './compnents/likeButton'
import MouseTracker from './compnents/MouseTracker'
import useMousePosition from './hooks/useMousePosition'
import useURLLoader from './hooks/useURLLoader'

import './App.css';

interface IshowResult {
  message: string,
  status: string
}

const App: React.FC = () => {

  const position = useMousePosition()

  const [data, loading] = useURLLoader('https://dog.ceo/api/breeds/image/random')

  const dogResult = data as IshowResult

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        X: {position.x}, Y: {position.y}
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        {loading ? <p>读取中</p> : <img src={dogResult && dogResult.message} />}
        <MouseTracker />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
