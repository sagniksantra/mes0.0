import React, { useState } from 'react';
import './Register.css';

const events = [
  { id: 1, name: 'Event 1' },
  { id: 2, name: 'Event 2' },
  { id: 3, name: 'Event 3' },
  { id: 4, name: 'Event 4' }
];

function Register() {
  const [username, setUsername] = useState('');
  const [selectedEvents, setSelectedEvents] = useState([]);

  const handleCheckboxChange = (event) => {
    const { id, checked } = event.target;
    if (checked) {
      setSelectedEvents([...selectedEvents, id]);
    } else {
      setSelectedEvents(selectedEvents.filter((i) => i !== id));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send the username and selected events to the server for registration
    console.log(username, selectedEvents);
  };

  return (
    <div className="register">
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <br />
      <h3>Select events to register for:</h3>
      {events.map((event) => (
        <div key={event.id}>
          <input
            type="checkbox"
            id={event.id}
            onChange={handleCheckboxChange}
          />
          <label htmlFor={event.id}>{event.name}</label>
        </div>
      ))}
      <br />
      <button type="submit">Register</button>
    </form>
    </div>
  );
}

export default Register;
