import React, { useState } from 'react';
import '../assets/Calendar.css';

interface Event {
  id: number;
  title: string;
  date: string;
}

const Calendar: React.FC<{ events: Event[] }> = ({ events }) => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const handleDateClick = (date: string) => {
    setSelectedDate(date);
  };

  return (
    <div className="calendar">
      <h2>Calendar</h2>
      {/* Add a calendar library or a grid to display dates */}
      <div className="calendar-grid">
        {events.map((event) => (
          <div key={event.id} onClick={() => handleDateClick(event.date)}>
            {event.date}
          </div>
        ))}
      </div>
      {selectedDate && (
        <div className="event-details">
          <h3>Events on {selectedDate}:</h3>
          {events
            .filter((event) => event.date === selectedDate)
            .map((event) => (
              <p key={event.id}>{event.title}</p>
            ))}
        </div>
      )}
    </div>
  );
};

export default Calendar;
