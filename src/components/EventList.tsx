import React from 'react';
import '../assets/EventList.css';

interface Event {
  id: number;
  title: string;
  date: string;
}

const EventList: React.FC<{ events: Event[] }> = ({ events }) => {
  const today = new Date().toISOString().split('T')[0];

  const upcomingEvents = events.filter((event) => event.date > today);
  const pastEvents = events.filter((event) => event.date <= today);

  return (
    <div className="event-list">
      <h2>Upcoming Events</h2>
      <ul>
        {upcomingEvents.map((event) => (
          <li key={event.id}>
            {event.title} - {event.date}
          </li>
        ))}
      </ul>
      <h2>Past Events</h2>
      <ul>
        {pastEvents.map((event) => (
          <li key={event.id}>
            {event.title} - {event.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
