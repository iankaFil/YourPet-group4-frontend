import React from 'react';
import OurFriendsItem from './OurFriendsItem/OurFriendsItem';
import css from './OurFriendsList.module.css';

const OurFriendsList = ({ friendList }) => {
  if (!friendList) {
    return null;
  }

  return (
    <ul className={css.wrapper}>
      {friendList.map(({ id, title, address, imageUrl, phone, email }) => (
        <OurFriendsItem
          key={id}
          id={id}
          title={title}
          address={address}
          phone={phone}
          imgUrl={imageUrl}
          email={email}
          loading="lazy"
        />
      ))}
    </ul>
  );
};

export default OurFriendsList;
