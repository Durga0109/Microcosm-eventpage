import React from 'react';
import Calendar from '../components/Calender';
import EventList from '../components/EventList';
import './EventsPage.css';
import eventsData from '../utils/eventsData';

const EventsPage: React.FC = () => {
  return (
    <div className="events-page">
      <h1>Events & Activities</h1>
      <Calendar events={eventsData} />
      <EventList events={eventsData} />
    </div>
  );
};

export default EventsPage;
