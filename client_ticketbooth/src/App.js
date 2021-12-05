import React from 'react';
import './App.css';
import LandingPage from './components/LandingPage/Landingpage';
import CreateEventPage from './components/EventPage/CreateEventpage';
import AllEventsPage from './components/EventPage/AllEventsPage';
import ShowEventDetails from './components/EventPage/ShowEventDetails';
import EditEventPage from './components/EventPage/EditEvent';
import UpdateProfile from './components/ProfilePage/UpdateProfile';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/CreateEvent" component={CreateEventPage} />
      <Route exact path="/EditEvent" component={EditEventPage} />
      <Route exact path="/AllEvents" component={AllEventsPage} />
      <Route exact path="/Event/:id" component={ShowEventDetails} />
      <Route exact path="/Profile" component={UpdateProfile} />
    </div>
  );
}

export default App;
