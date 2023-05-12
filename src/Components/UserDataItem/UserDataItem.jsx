import React from 'react'
import {useField } from 'formik';
 
const UserDataItem = ({ label, ...props }) => {
   const [field, meta] = useField(props);
   return (
     <>
       <label>
         {label}
         <input {...field} {...props} />
       </label>
       {meta.touched && meta.error ? (
         <div className="error">{meta.error}</div>
       ) : null}
     </>
   );
};

export default UserDataItem
