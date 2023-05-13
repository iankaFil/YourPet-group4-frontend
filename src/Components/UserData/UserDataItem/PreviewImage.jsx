import React, { useState } from 'react'

import defaultUserImg from '../../../Shared/images/defaultUserImg.png'

import styles from './PreviewImage.module.css'

export const PreviewImage = ({ file }) => {
  const [preview, setPreview] = useState(null);
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    setPreview(reader.result)
  }

  return <div className={styles.preview} >
    <img
      src={preview ? preview : defaultUserImg}
      alt='preview'
      className={styles.preview__img}
      />
  </div>
}
