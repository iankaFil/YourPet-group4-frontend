import React, { useState } from 'react';

import css from './timepicker.module.css';

const TimePicker = ({ timeOptions, menuZIndex }) => {
  console.log('ЭТО ТО ЧТО ПРИХОДИТ ', timeOptions);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const weekDays = ['MN', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];

  const day = new Date();
  const dayOfWeek = day.getDay();

  const currentDayWorkHours = () => {
    if (timeOptions && timeOptions.length > 0) {
      if (timeOptions[dayOfWeek].isOpen) {
        return `${timeOptions[dayOfWeek].from} - ${timeOptions[dayOfWeek].to}`;
      }
    }
    return 'CLOSED';
  };

  return (
    <div>
      <div className={css.time} onClick={handleToggle}>
        {currentDayWorkHours()}
      </div>
      {isOpen && (
        <ul style={{ zIndex: menuZIndex }}>
          {timeOptions &&
            timeOptions.length > 0 &&
            timeOptions.map((option, index) => (
              <li
                className={index === dayOfWeek - 1 ? css.currentDay : ''}
                key={index}
              >
                {weekDays[index]}{' '}
                {option.isOpen ? `${option.from} - ${option.to}` : 'CLOSED'}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default TimePicker;
