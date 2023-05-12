import React, { useRef } from 'react'
import { Formik, Form, ErrorMessage } from 'formik';
import { userDataValidationSchema } from 'Shared/validation';

import UserDataItem from 'Components/UserDataItem';
import { PreviewImage } from '../UserDataItem';
import defaultUserImg from '../../Shared/images/defaultUserImg.png'

import styles from './UserData.module.css'

const UserData = () => {
  const fileRef = useRef(null);

  return (
      < >
          <h2>My information:</h2>
        <Formik
          initialValues={{
            file: null,
            name: '',
            email: '',
            birthday: '',
            phone: '',
            city: ''
        }}
          validationSchema={userDataValidationSchema}
          onSubmit={(values) => console.log(values)}
      >
        {({ values, setFieldValue }) => (
          <Form className={styles.form}>
            <input ref={fileRef} type='file' hidden onChange={(event) => {
              setFieldValue('file', event.target.files[0])
            }} />
            <ErrorMessage name='file'/>
            
            {values.file ? <PreviewImage file={values.file} /> : <img src={defaultUserImg} alt='Default' width='182px' height='182px' />}

            <button type='button' onClick={()=> {fileRef.current.click()}}>Edit photo</button>
            <UserDataItem type='text' name='name' label='Name'/>
            <UserDataItem type='email' name='email' label='Email' />
            <UserDataItem type='text' name='birthday' label='Birthday' />
            <UserDataItem type='text' name='phone' label='Phone' />
            <UserDataItem type='text' name='city' label='City' />
            <button type='submit'>Submit</button>
          </Form> 
        )}
        </Formik>
    </>
  )
}

export default UserData