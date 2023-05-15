import React from 'react';
import css from './OurFriendsItem.module.css';

const OurFriendsItem = ({
  id,
  title,
  address,
  imgUrl,
  phone,
  email,
  loading,
}) => {
  return (
    <li className={css.item} key={id}>
      <div className={css.imgWrap}>
        <img className={css.img} src={imgUrl} alt={title} loading={loading} />
      </div>
      <div className={css.descrWrap}>
        <h3 className={css.title}>{title}</h3>
        <p className={css.address}>{address}</p>
        <p className={css.phone}>{phone}</p>
        <a className={css.email} href={`mailto:${email}`}>
          {email}
        </a>
      </div>
    </li>
  );
};

export default OurFriendsItem;
