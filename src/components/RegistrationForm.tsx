import React, { useState } from 'react';
import '../assets/RegistrationForm.css';

const RegistrationForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`Name: ${name}, Email: ${email}`);
    // Submit form logic
  };

  return (
    <form className="registration-form" onSubmit={handleSubmit}>
      <h2>Register for the Event</h2>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
