import React from 'react';
// import { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

// import { fetchNews } from 'Redux/news/news-operations';
// import {
//   selectIsLoading,
//   selectError,
//   selectNews,
// } from 'Redux/news/news-selectors';
// import css from 'Pages/NewsPage/NewsPage.module.css';

import Section from 'Components/Section';
import Container from 'Components/Container/';
import Title from 'Components/Title/Title';
import NewsSearch from 'Components/News/NewsSearch/NewsSearch';
import NewsList from 'Components/News/NewsList/NewsList';

const NewsPage = () => {
  // const dispatch = useDispatch();
  // const newsItems = useSelector(selectNews);
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);

  // useEffect(() => {
  //   dispatch(fetchNews());
  // }, [dispatch]);

  return (
    <Section>
      <Container>
        <Title>News</Title>
        <NewsSearch />
        <NewsList />
      </Container>
    </Section>
  );
};

export default NewsPage;
