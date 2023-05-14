import OurFriendsItem from './OurFriendsItem/OurFriendsItem';
import css from './OurFriendsList.module.css';

const OurFriendsList = ({ friendList }) => {
  if (!friendList) {
    return (
      <ul className={css.wrapper}>
        <OurFriendsItem />
      </ul>
    );
  }

  // return (
  //   <ul>
  //     <OurFriendsItem />
  //     {friendList.map(({ id, title, address, imgUrl, phone, email }) => (
  //       <OurFriendsItem
  //         key={id}
  //         id={id}
  //         title={title}
  //         address={address}
  //         phone={phone}
  //         imgUrl={imgUrl}
  //         email={email}
  //         loading="lazy"
  //       />
  //     ))}
  //   </ul>
  // );
};

export default OurFriendsList;
