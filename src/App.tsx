import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import EventPage from './pages/EventsPage';
import RegisterPage from './pages/RegisterPage';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="App-main">
          <Routes>
            <Route path="/" element={<EventPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;

