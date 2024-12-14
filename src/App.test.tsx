import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

// Mock the router and render the app
test('renders Events & Activities heading', () => {
  render(
    <Router>
      <App />
    </Router>
  );

  // Check if the "Events & Activities" heading appears in the document
  const headingElement = screen.getByText(/Events & Activities/i);
  expect(headingElement).toBeInTheDocument();
});
