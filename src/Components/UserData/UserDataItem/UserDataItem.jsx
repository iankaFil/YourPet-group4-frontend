import React, { useRef, useState } from 'react';
import { useField } from 'formik';

import { EditIcon } from 'Components/SvgIcons/EditIcon';
import { ConfirmIcon } from 'Components/SvgIcons/ConfirmIcon';

import css from './UserDataItem.module.css';

const UserDataItem = ({ label, fieldName, handleClick, ...props }) => {
  const [field, meta] = useField(props);
  const [isEditing, setIsEditing] = useState(false); 
  
  const { name, value } = field;
  const updateData = { [name]: value };
  const inputRef = useRef(null);
  const isFieldEmpty = value.trim() === '';

  const handleEditClick = () => {
    setIsEditing(true); 
    inputRef.current.focus();
  };

  const handleConfirmClick = () => {
    setIsEditing(false); 
    handleClick(updateData); 
  };

  return (
    <>
      <div className={css.inputWrap}>
        <label className={css.label}>{label}</label>
        <div className={css.wrap}>
          <input
            {...field}
            {...props}
            ref={inputRef}
            className={css.input}
            readOnly={!isEditing} 
            autoFocus={isEditing} 
          />
          {isEditing && !isFieldEmpty ? (
            <button type="button" className={css.submitBtn} onClick={handleConfirmClick}>
              <ConfirmIcon id="svg" className={`${css.confirmIcon} ${css.confirmIconSub}`} />
            </button>
          ) : (
            <button type="button" className={css.submitBtn} onClick={handleEditClick}>
              <EditIcon id="svg" className={css.edit} />
            </button>
          )}
          <div className={css.errorWrap}>
        {meta.touched && meta.error ? <div className={css.error}>{meta.error}</div> : null}
      </div>
        </div>
      </div>
      
    </>
  );
};

export default UserDataItem;
