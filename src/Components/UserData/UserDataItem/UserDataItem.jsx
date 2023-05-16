import React from 'react';
import { useField } from 'formik';

import EditIcon from 'Components/SvgIcons/EditIcon';

import css from './UserDataItem.module.css';

const UserDataItem = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <div className={css.inputWrap}>
        <label className={css.label}>{label}</label>
        <div className={css.wrap}>
          <input {...field} {...props} className={css.input} />
          <EditIcon id="svg" className={css.edit} />
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
