import React from 'react';
import logo from './logo.svg';
import './App.css';

function App () {

  const user = window.harmony.api.getUser();

  return (
    <div className="app">
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <h1 className="app-title">Welcome to React in Harmony, <span style={{ color: '#f99829' }}>{user.firstName}</span>!</h1>
      </header>
      <div>
        This is newly created Harmony app
      </div>
    </div>
  );
}

export default App;
