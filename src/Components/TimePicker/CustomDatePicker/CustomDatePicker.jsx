import React, { useEffect, useState } from 'react';
import css from './CustomDatePicker.module.css';
import CalendarIcon from 'Components/SvgIcons/CalendarIcon';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CustomDatePicker = ({setBirthdayWrapper, birthday, className} ) => {
  const [selectedDate, setSelectedDate] = useState(birthday || new Date());

  useEffect(() => {
    setBirthdayWrapper(selectedDate);
  },[selectedDate, setBirthdayWrapper])

  return (
    <div className={css.datePicker}>
      <label className={css.LabelStep} htmlFor="birthdate">
        Date of birth
      </label>
      <DatePicker
        className= {`${css.dateInput} ${className}`}
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        peekNextMonth
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
        placeholderText="Type date of birth"
        dateFormat="dd.MM.yyyy"
      />
      <CalendarIcon id="svg" className={css.calendarIcon} />
    </div>
  );
};

export default CustomDatePicker;
