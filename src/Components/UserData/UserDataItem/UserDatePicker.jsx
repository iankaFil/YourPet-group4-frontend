import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

// import { EditIcon } from 'Components/SvgIcons/EditIcon';
import { ConfirmIcon } from 'Components/SvgIcons/ConfirmIcon';

import 'react-datepicker/dist/react-datepicker.css';
import css from './UserDataItem.module.css';
import { parseISO } from 'date-fns';

const UserDatePicker = ({ label, initialDate, fieldName, handleClick, ...props }) => {
  const [selectedDate, setSelectedDate] = useState(parseISO(initialDate));

  const handleChange = (date) => {
    setSelectedDate(date);
 }

  return (
    <>
      <div className={css.inputWrap}>
        <label className={css.label}>{label}</label>
        <div className={css.wrap}>
          <DatePicker
            className={`${css.dateInput} ${props.className}`}
            selected={selectedDate}
            onChange={handleChange}
            peekNextMonth
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
            placeholderText="Type date of birth"
          />
          {/* {meta.touched && !meta.error ? ( */}
            <button
              type="button"
              className={css.submitBtn}
              onClick={() => handleClick({ birthday: new Date(selectedDate) }) }
            >
              <ConfirmIcon id="svg" className={css.confirmIcon} />
            </button>
          {/* ) : (
            <EditIcon id="svg" className={css.edit} />
          )} */}
        </div>
      </div>
      {/* <div className={css.errorWrap}>
        {meta.touched && meta.error ? (
          <div className={css.error}>{meta.error}</div>
        ) : null}
      </div> */}
    </>
  );
};

export default UserDatePicker;
