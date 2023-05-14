import React, { useRef } from 'react';
import {useDispatch} from 'react-redux';
import { Link} from 'react-router-dom';

import { Formik, Form, ErrorMessage } from 'formik';
import { userDataValidationSchema } from 'Shared/validation';

import UserDataItem from './UserDataItem/UserDataItem';
import defaultUserImg from '../../Shared/images/defaultUserImg.png';
import CameraIcon from 'Components/SvgIcons/CameraIcon';
import ConfirmIcon from 'Components/SvgIcons/ConfirmIcon';
import LogoutIcon from 'Components/SvgIcons/LogoutIcon';
import { PreviewImage } from './UserDataItem';

import { logout } from 'Redux/auth/auth-operations';

import css from './UserData.module.css';
 
const UserData = ({photo, name, birthday, email, phone, city}) => {
 
  const fileRef = useRef(null);
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout()); 
  };

  return (
    <div className={css.user}>
      <h2 className={css.user__title}>My information:</h2>
      <Formik
        initialValues={{
          file: photo || null,
          name:name || '',
          email: email || '',
          birthday: birthday || '',
          phone: phone || '',
          city:city || '',
        }}
        validationSchema={userDataValidationSchema}
        onSubmit={values => console.log(values)}
      >
        {({ values, setFieldValue }) => (
          <Form className={css.form}>
            <div className={css.previewWrap}>
              <div className={css.preview}>
              <input
              ref={fileRef}
              type="file"
              hidden
              onChange={event => {
                setFieldValue('file', event.target.files[0]);
              }}
            />
            <ErrorMessage name="file" />

            {values.file ? (
              <PreviewImage file={values.file} />
            ) : (
              <img
                src={defaultUserImg}
                alt="Default"
                width="182px"
                height="182px"
              />
            )}
            </div>

            <button
              type="button"
              onClick={() => {
                fileRef.current.click()
              }}
              className={css.button}
            >
              <CameraIcon id="svg" />
              Edit photo
            </button>
            <button
              type="button"
              onClick={() => {
                fileRef.current.click()
              }}
              className={css.button}
            >
              <ConfirmIcon id="svg" />
              Confirm
            </button>
            </div>
            <div className={css.inputContainer}>
              <div className={css.inputWrap}>
              <UserDataItem type="text" name="name" label="Name" />
              <UserDataItem type="email" name="email" label="Email" />
              <UserDataItem type="text" name="birthday" label="Birthday" />
              <UserDataItem type="text" name="phone" label="Phone" />
              <UserDataItem type="text" name="city" label="City" />
            </div>
              <Link className={css.link} onClick={onLogout}>
                <LogoutIcon id='svg'/>
                  Log Out
              </Link>
            </div>
            {/* <button type="submit">Submit</button> */}
          </Form>
        )}
      </Formik>
      
    </div>
  );
};

export default UserData;
