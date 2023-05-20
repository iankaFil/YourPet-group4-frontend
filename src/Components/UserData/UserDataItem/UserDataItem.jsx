import React from 'react';
import { useField } from 'formik';

import {EditIcon} from 'Components/SvgIcons/EditIcon';
import {ConfirmIcon} from 'Components/SvgIcons/ConfirmIcon';

import css from './UserDataItem.module.css';

const UserDataItem = ({ label, fieldName, handleClick, ...props }) => {
  const [field, meta] = useField(props); 

  const { name, value } = field;
  const updateData = {[name]: value}

  // const handleClick = (e) => {
  //   console.log(e)
  // }

  return (
    <>
      <div className={css.inputWrap}>
        <label className={css.label}>{label}</label>
        <div className={css.wrap}>
          <input {...field} {...props} className={css.input} />
          {meta.touched && !meta.error ? (
            <button type="button" className={css.submitBtn} onClick={() => handleClick(updateData) }>
              <ConfirmIcon id="svg" className={css.confirmIcon} />
            </button>
         ) : (
          <EditIcon id="svg" className={css.edit} />
        )} 
        </div>
      </div>
      <div className={css.errorWrap}>
        {meta.touched && meta.error ? (
          <div className={css.error}>{meta.error}</div>
        ) : null}
      </div>
    </>
  );
};

export default UserDataItem;
