import React from 'react';
import css from './OurFriendsItem.module.css';
import TimePicker from 'Components/TimePicker/TimePicker';

const OurFriendsItem = ({
  id,
  title,
  address,
  imgUrl,
  phone,
  email,
  working,
  loading,
  // openingTime,
  // closingTime,
}) => {
  return (
    <li className={css.item} key={id}>
      <h3 className={css.title}>{title}</h3>
      <div className={css.itemWrap}>
        <div className={css.imgWrap}>
          <img className={css.img} src={imgUrl} alt={title} loading={loading} />
        </div>

        <div className={css.descrWrap}>
          <p className={css.subtitle}>Time:</p>
          <TimePicker
            className={css.timePicker}
            timeOptions={working}
            menuZIndex={100}
          />
          <p className={css.subtitle}>Address:</p>
          <a
            className={css.value}
            href={`https://maps.google.com/?q=${address}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {address}
          </a>

          <p className={css.subtitle}>Phone:</p>
          <a className={css.value} href={`tel:${phone}`}>
            {phone}
          </a>
          <p className={css.subtitle}>Email:</p>
          <a className={css.value} href={`mailto:${email}`}>
            {email}
          </a>
        </div>
      </div>
    </li>
  );
};

export default OurFriendsItem;
