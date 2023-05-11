import React, { useState } from 'react'

import defaultUserImg from '../../Shared/images/defaultUserImg.png'

export const PreviewImage = ({ file }) => {
  const [preview, setPreview] = useState(null);
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    setPreview(reader.result)
  }

  return <div>
    <img src={preview ? preview : defaultUserImg} alt='preview' width='182px' height='182px' />
  </div>
}
