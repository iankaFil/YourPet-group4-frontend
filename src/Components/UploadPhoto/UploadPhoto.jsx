import React, { useRef, useState } from 'react';
import css from './UploadPhoto.module.css';
import { ConfirmIcon, TrashIcon } from 'Components/SvgIcons';
import { useSelector } from 'react-redux';
import { getUser } from 'Redux/auth/auth-selectors';
import instance from 'Shared/api/auth-api';
import { avatarValidationSchema } from 'Shared/validation';
import CameraIcon from 'Components/SvgIcons/CameraIcon';

const UploadPhoto = () => {
    const user = useSelector(getUser);
    const photoFromServer = user.avatarURL;
    const [uploadedPhoto, setUploadedPhoto] = useState('');
    const [userAvatar, setUserAvatar] = useState(photoFromServer);
    const [isSubmitted, setIsSubmitted] = useState(true);
    const [errors, setErrors] = useState({});
    const fileInputRef = useRef(null);
 
    const updateAvatar = async (endpoint, data) => {
      try {
        const response = await instance.patch(endpoint, data);
        if (response.status === 201) {
      } return response.data;
      } catch (error) {
        return error.message;
      }
    };
  
    const handleSubmit = () => {
      const formDataSend = new FormData();
      formDataSend.append("avatar", uploadedPhoto);
      updateAvatar('/users/avatars', formDataSend);
      setUserAvatar(photoFromServer)
      setIsSubmitted(true);
    };

     const handleFileChange = async (e) => {
      const file = e.target.files[0];
      if (file) {
        await avatarValidationSchema
        .validate({ avatar: file })
        .then(() => {
          setUserAvatar(null);
          setUploadedPhoto(file);
          setIsSubmitted(false);
          setErrors({});
        })
        .catch((error) => {
          setErrors({ uploadedPhoto: error.message });
        });
    }
  };

      const handlePreviewClick = () => {
      fileInputRef.current.click();
    };

      const handleDeletePhoto = () => {
      setUserAvatar(photoFromServer)
      setUploadedPhoto(null);
    };

  return (

    <div>
      <div className={css.preview}>
          <input
            ref={fileInputRef}
            type="file"
            id="avatar"
            onChange={handleFileChange}
            style={{ display: 'none' }}
          />
        <label htmlFor="avatar">
          <div className={css.labelAdd}>
            {uploadedPhoto ? (
              <img
                className={css.preview__img}
                src={URL.createObjectURL(uploadedPhoto)}
                alt="User avatar"
              />
            )
              :
            (<img
                className={css.preview__img}
                src={userAvatar}
                alt="User avatar"
              />)
            }
          </div>
        </label>
        {errors.uploadedPhoto && <p className={css.errorComent}>{errors.uploadedPhoto}</p>}
      </div>
      
      {!userAvatar && (
        <div className={css.btnWrapper}>
          <button type="submit" onClick={handleSubmit} className={css.button}>
            <ConfirmIcon id='svg' />
            Confirm
          </button>
          <button type="button" onClick={handleDeletePhoto} className={css.delete_btn}>
            <TrashIcon id='svg' className={css.trashIcon} />
          </button>
          </div>
      )}
      {(uploadedPhoto && isSubmitted) ? (
        <button type="button" onClick={handlePreviewClick} className={css.editButton}>
          <CameraIcon id='svg' className={css.cameraIcon} />
          Edit photo</button>
      ) : (
        !uploadedPhoto && <button type="button" onClick={handlePreviewClick} className={`${css.button} ${css.editButton}`}>
            <CameraIcon id='svg' className={css.cameraIcon}/>
          Edit photo</button>
    )}
    </div>
    
  )
}
      
  
export default UploadPhoto;
