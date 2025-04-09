// src/App.jsx
import React from 'react';
import DateTimeLabel from './component/DateTimeLabel';

const App = () => {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Current Date & Time</h1>
      <DateTimeLabel />
    </div>
  );
};

export default App;
