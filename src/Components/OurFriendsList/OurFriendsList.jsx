import React from 'react';
import OurFriendsItem from './OurFriendsItem/OurFriendsItem';
import css from './OurFriendsList.module.css';

const OurFriendsList = ({ friendList }) => {
  if (!friendList) {
    return null;
  }

  return (
    <ul className={css.wrapper}>
      {friendList.map(
        ({ _id, title, address, imageUrl, phone, email, workDays }) => (
          <OurFriendsItem
            key={_id}
            id={_id}
            title={title}
            address={address}
            phone={phone}
            imgUrl={imageUrl}
            email={email}
            openingTime={
              (workDays &&
                workDays.length > 0 &&
                workDays.find(day => day.isOpen)?.from) ||
              '10:00'
            }
            closingTime={
              (workDays &&
                workDays.length > 0 &&
                workDays.find(day => day.isOpen)?.to) ||
              '17:00'
            }
            // loading="lazy"
          />
        )
      )}
    </ul>
  );
};

export default OurFriendsList;
