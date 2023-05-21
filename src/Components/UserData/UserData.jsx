import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import { userDataValidationSchema } from 'Shared/validation';

import UserDataItem from './UserDataItem/UserDataItem'; 
import LogoutIcon from 'Components/SvgIcons/LogoutIcon';
import ModalApproveAction from 'Components/ModalApproveAction/ModalApproveAction';
import UserDatePicker from './UserDataItem/UserDatePicker';
import UploadPhoto from 'Components/UploadPhoto/UploadPhoto';

import { logout, updateUser } from 'Redux/auth/auth-operations';
import { isUserLogin } from 'Redux/auth/auth-selectors';

import css from './UserData.module.css';
import { Button } from 'antd';

const UserData = ({ avatarURL, name, birthday, email, phone, city, handleClick, handlePhotoSubmit }) => {
  const [showModal, setShowModal] = useState(false);
  const isLogin = useSelector(isUserLogin);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLogin) {
      navigate('/login');
    }
  }, [isLogin, navigate]);

  const onLogout = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleFormSubmit = async (values) => {
    try {
      await dispatch(updateUser(values));
    } catch (error) {
      console.log('Error updating user data:', error);
    }
  };

  return (
    <div className={css.user}>
      <h2 className={css.user__title}>My information:</h2>
      <div className={css.user__wrapper}>
         <UploadPhoto/>
      <Formik
        initialValues={{
          photo: avatarURL || null,
          name: name || '',
          email: email || '',
          birthday: birthday || '',
          phone: phone || '',
          city: city || '',
        }}
        validationSchema={userDataValidationSchema}
        onSubmit={handleFormSubmit}
      >
        {({ values }) => (
          <Form className={css.form}>
            <div className={css.inputContainer}>
              <div className={css.inputWrap}>
                <UserDataItem type="text" name="name" label="Name:" handleClick={handleClick} />
                <UserDataItem type="email" name="email" label="Email:" handleClick={handleClick} />
                <UserDatePicker
                  type="text"
                  name="birthday"
                  label="Birthday:"
                  handleClick={handleClick}
                  initialDate={values.birthday}
                />
                <UserDataItem type="text" name="phone" label="Phone:" handleClick={handleClick} />
                <UserDataItem type="text" name="city" label="City:" handleClick={handleClick} />
              </div>
              <Link className={css.link} onClick={onLogout}>
                <LogoutIcon id="svg" className={css.logoutIcon} />
                Log Out
              </Link>
            </div>
          </Form>
        )}
      </Formik>
     </div>
      {showModal && (
        <ModalApproveAction onClose={handleCloseModal} handleApproveClick={handleLogout}>
          <h2 className={css.modalTitle}>Already leaving?</h2>
          <div className={css.buttonWrap}>
            <Button onClick={handleCloseModal} className={`${css.modalBtn} ${css.cancelBtn}`}>
              Cancel
            </Button>
            <Button onClick={handleLogout} className={`${css.modalBtn} ${css.approveBtn}`}>
              Yes
              <LogoutIcon id='svg'className={css.logoutIconModal}/>
            </Button>
          </div>
        </ModalApproveAction>
      )}
    </div>
  );
};

export default UserData;
