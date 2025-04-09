// src/components/DateTimeLabel.jsx
import React, { useState, useEffect } from 'react';

const DateTimeLabel = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000); // updates every second

    return () => clearInterval(timer); // cleanup on unmount
  }, []);

  return (
    <label style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
      {dateTime.toLocaleString()}
    </label>
  );
};

export default DateTimeLabel;
