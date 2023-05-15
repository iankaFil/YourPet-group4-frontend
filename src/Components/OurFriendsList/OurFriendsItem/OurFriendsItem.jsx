import React, { useState, useEffect } from 'react';
import css from './OurFriendsItem.module.css';
import TimePicker from 'Components/TimePicker/TimePicker';

const OurFriendsItem = ({
  id,
  title,
  address,
  imgUrl,
  phone,
  email,
  loading,
  openingTime,
  closingTime,
}) => {
  const [timeOptions, setTimeOptions] = useState([]);

  useEffect(() => {
    async function fetchTimeOptions() {
      try {
        const response = await fetch(`api/friend/${id}/time`);
        const { openingTime, closingTime } = await response.json();
        setTimeOptions([`${openingTime} - ${closingTime}`]);
      } catch (error) {
        console.log(error);
      }
    }
    fetchTimeOptions();
  }, [id]);

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
            timeOptions={timeOptions}
            menuZIndex={100}
          />
          <p className={css.subtitle}>Address:</p>
          <p className={css.value}>{address}</p>
          <p className={css.subtitle}>Phone:</p>
          <p className={css.value}>{phone}</p>
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
