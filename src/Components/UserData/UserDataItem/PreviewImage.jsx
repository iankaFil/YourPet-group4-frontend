import React from 'react'  
  
import defaultUserImg from '../../../Shared/images/defaultUserImg.png'  
  
import styles from './PreviewImage.module.css'  
import { useSelector } from 'react-redux'; 
import { getUser } from 'Redux/auth/auth-selectors'; 
  
export const PreviewImage = ({ file }) => {   
  const { avatarURL } = useSelector(getUser) 
 
  return (  
    <div className={styles.preview}>  
      <img  
        src={avatarURL? avatarURL : defaultUserImg}  
        alt="preview"  
        className={styles.preview__img}  
      />  
    </div>  
  );  
};
