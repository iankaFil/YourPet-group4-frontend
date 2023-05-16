import React, { useEffect } from 'react';
import Section from 'Components/Section';
import Container from 'Components/Container/';
import Title from 'Components/Title/Title';
import OurFriendsList from '../../Components/OurFriendsList/OurFriendsList';
import { useDispatch, useSelector } from 'react-redux';
import Loader from 'Components/Loader/Loader';
import { fetchOurFriends } from 'Redux/ourFriends/ourFriends-operations';
import {
  selectIsLoading,
  selectError,
  selectFriends,
} from 'Redux/ourFriends/ourFriends-selectors';

const OurFriendsPage = () => {
  const dispatch = useDispatch();
  const ourFriendsList = useSelector(selectFriends);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchOurFriends());
  }, [dispatch]);

  if (isLoading && !error) {
    return <Loader />;
  }

  return (
    <Section>
      <Container>
        <Title>Our Friends</Title>
        <OurFriendsList friendList={ourFriendsList} />
      </Container>
    </Section>
  );
};

export default OurFriendsPage;
