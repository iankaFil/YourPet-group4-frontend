import React, { useState } from 'react';

const TimePicker = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [time, setTime] = useState('10:00 AM - 5:00 PM');

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = newTime => {
    setIsOpen(false);
    setTime(newTime);
  };

  const timeOptions = [
    '9:00 AM - 4:00 PM',
    '10:00 AM - 5:00 PM',
    '11:00 AM - 6:00 PM',
    '12:00 PM - 7:00 PM',
  ];

  return (
    <div>
      <div onClick={handleToggle}>{time}</div>
      {isOpen && (
        <ul>
          {timeOptions.map(option => (
            <li key={option} onClick={() => handleSelect(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TimePicker;
