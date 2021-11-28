import React from 'react';
import './App.css';
import LandingPage from './components/LandingPage/Landingpage';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Route exact path="/" component={LandingPage} />
    </div>
  );
}

export default App;
