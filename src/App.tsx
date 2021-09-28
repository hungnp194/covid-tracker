import React from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './theme/layout';
import { HighShadowButton } from './components/Buttons';

function App() {
  return (
    <Layout>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <div style={{ width: 260 }}>
          <HighShadowButton fullWidth>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer">
              Learn React
            </a>
          </HighShadowButton>
        </div>
      </header>
    </Layout>
  );
}

export default App;
