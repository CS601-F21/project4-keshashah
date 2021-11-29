import React from 'react';
import './App.css';
import LandingPage from './components/LandingPage/Landingpage';
import CreateEventPage from './components/EventPage/CreateEventpage';
import AllEventsPage from './components/EventPage/AllEventsPage';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/CreateEvent" component={CreateEventPage} />
      <Route exact path="/AllEvents" component={AllEventsPage} />
    </div>
  );
}

export default App;
