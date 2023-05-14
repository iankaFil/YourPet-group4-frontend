import React from 'react';
import Section from 'Components/Section';
import Container from 'Components/Container/';
import Title from 'Components/Title/Title';
import OurFriendsList from '../../Components/OurFriendsList/OurFriendsList';
// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

// import { fetchOurFriends } from 'Redux/ourFriends/ourFriends-operations';
// import {
//   selectIsLoading,
//   selectError,
//   selectFriends,
// } from 'Redux/ourFriends/ourFriends-selectors';
// import css from 'Pages/NewsPage/NewsPage.module.css';

const OurFriendsPage = () => {
  // const dispatch = useDispatch();
  // const ourFriendsItems = useSelector(selectFriends);
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);

  // useEffect(() => {
  //   dispatch(fetchOurFriends());
  // }, [dispatch]);

  return (
    <>
      <Section>
        <Container>
          <Title>Our Friends</Title>
          <OurFriendsList />
          {/* {isLoading && !error && <p>ТУТ ДОЛЖЕН БЫТЬ ЛОАДЕР</p>}
          {ourFriendsItems.length > 0 && (
            <OurFriendsList news={ourFriendsItems} />
          )} */}
        </Container>
      </Section>
    </>
  );
};

export default OurFriendsPage;
