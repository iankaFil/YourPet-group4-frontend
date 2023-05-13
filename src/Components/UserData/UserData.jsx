import React, { useRef } from 'react';
// import { Link} from 'react-router-dom';
// import { useDispatch } from 'react-redux';

import { Formik, Form, ErrorMessage } from 'formik';
import { userDataValidationSchema } from 'Shared/validation';

import UserDataItem from './UserDataItem/UserDataItem';
import defaultUserImg from '../../Shared/images/defaultUserImg.png';
import CameraIcon from 'Components/SvgIcons/CameraIcon';
import ConfirmIcon from 'Components/SvgIcons/ConfirmIcon';
import LogoutIcon from 'Components/SvgIcons/LogoutIcon';
import { PreviewImage } from './UserDataItem';

import styles from './UserData.module.css';



const UserData = () => {
  const fileRef = useRef(null);
  // const dispatch = useDispatch();

  // const onLogout = () => {
  //   dispatch(logout()); 
  // };
  
  return (
    <div className={styles.user}>
      <h2 className={styles.user__title}>My information:</h2>
      <Formik
        initialValues={{
          file: null,
          name: '',
          email: '',
          birthday: '',
          phone: '',
          city: '',
        }}
        validationSchema={userDataValidationSchema}
        onSubmit={values => console.log(values)}
      >
        {({ values, setFieldValue }) => (
          <Form className={styles.form}>
            <div className={styles.previewWrap}>
              <div className={styles.preview}>
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
              className={styles.button}
            >
              <CameraIcon id="svg" />
              Edit photo
            </button>
            <button
              type="button"
              onClick={() => {
                fileRef.current.click()
              }}
              className={styles.button}
            >
              <ConfirmIcon id="svg" />
              Confirm
            </button>
            </div>

            <div className={styles.inputContainer}>
              <div className={styles.inputWrap}>
              <UserDataItem type="text" name="name" label="Name" />
              <UserDataItem type="email" name="email" label="Email" />
              <UserDataItem type="text" name="birthday" label="Birthday" />
              <UserDataItem type="text" name="phone" label="Phone" />
              <UserDataItem type="text" name="city" label="City" />
            </div>
            {/* <Link className={styles.link} onClick={onLogout}>
                  Log out
              </Link> */}
              <a href='/' className={styles.link}>
                <LogoutIcon id='svg'/>
                Log Out
              </a>
            </div>
            {/* <button type="submit">Submit</button> */}
          </Form>
        )}
      </Formik>
      
    </div>
  );
};

export default UserData;
