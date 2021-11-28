import React from 'react';
import './App.css';
import LandingPage from './components/LandingPage/Landingpage';
import CreateEventPage from './components/EventPage/CreateEventpage';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/CreateEvent" component={CreateEventPage} />
    </div>
  );
}

export default App;
