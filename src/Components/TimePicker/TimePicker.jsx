import React, { useState } from 'react';

const TimePicker = ({ timeOptions, menuZIndex }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [time, setTime] = useState(timeOptions[0]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = newTime => {
    setIsOpen(false);
    setTime(newTime);
  };

  return (
    <div>
      <div onClick={handleToggle}>{time}</div>
      {isOpen && (
        <ul style={{ zIndex: menuZIndex }}>
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
