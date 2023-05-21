import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

import { EditIcon } from 'Components/SvgIcons/EditIcon';
import { ConfirmIcon } from 'Components/SvgIcons/ConfirmIcon';

import 'react-datepicker/dist/react-datepicker.css';
import css from './UserDatePicker.module.css';
import { parseISO, isValid  } from 'date-fns';

const UserDatePicker = ({ label, initialDate, fieldName, handleClick, ...props }) => {

  const [error, setError] = useState(null);
  const [isDateSelected, setIsDateSelected] = useState(false); // Добавлено состояние для отслеживания выбранной даты

  const [selectedDate, setSelectedDate] = useState(()=> initialDate ? parseISO(initialDate) : new Date());


  const handleChange = (date) => {
    setSelectedDate(date);
    setError(null);
    setIsDateSelected(true); // Устанавливаем флаг выбранной даты в true
  };

  const handleButtonClick = () => {
    if (isValid(selectedDate)) {
      handleClick({ birthday: selectedDate });
      setIsDateSelected(false); // Сбрасываем флаг выбранной даты в false после подтверждения
    } else {
      setError('Invalid date');
    }
  };

  return (
    <>
      <div className={css.inputWrap}>
        <label className={css.label}>{label}</label>
        <div className={css.wrap}>
          <DatePicker
            className={`${css.input} ${props.className}`}
            selected={selectedDate}
            onChange={handleChange}
            peekNextMonth
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
            dateFormat="dd.MM.yyyy"
            placeholderText="Type date of birth"
          />
          <button
            type="button"
            className={css.submitBtn}
            onClick={handleButtonClick}
          >
            {isDateSelected ? (
              <ConfirmIcon id="svg" className={css.confirmIcon} />
            ) : (
              <EditIcon id="svg" className={css.edit} />
            )}
          </button>
        </div>
        {error && <div className={css.error}>{error}</div>}
      </div>
    </>
  );
};

export default UserDatePicker;
