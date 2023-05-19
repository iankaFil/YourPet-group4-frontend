import React, { useState } from 'react';
import css from './CustomDatePicker.module.css';
import CalendarIcon from 'Components/SvgIcons/CalendarIcon';

const CustomDatePicker = () => {
  const [selectedDate, setSelectedDate] = useState('');

  const handleDateChange = e => {
    setSelectedDate(e.target.value);
  };

  return (
    <div className={css.datePicker}>
      <label className={css.LabelStep} htmlFor="birthdate">
        Date of birth
      </label>
      <input
        className={css.dateInput}
        type="text"
        value={selectedDate}
        onChange={handleDateChange}
        // placeholder="Select a date"

        // value={birthday}
        // onChange={e => setBirthday(e.target.value)}
        // required
        placeholder="Type date of birth"
      />
      <CalendarIcon id="svg" className={css.calendarIcon} />
      <input
        className={css.datePickerIcon}
        type="date"
        id="birthdate"
        value={selectedDate}
        onChange={handleDateChange}
      />
    </div>
  );
};

export default CustomDatePicker;
