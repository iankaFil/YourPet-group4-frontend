import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchNews } from 'Redux/news/news-operations';
import {
  selectIsLoading,
  selectError,
  selectNews,
} from 'Redux/news/news-selectors';
// import css from 'Pages/NewsPage/NewsPage.module.css';

import Section from 'Components/Section';
import Container from 'Components/Container/';
import Title from 'Components/Title/Title';
import NewsSearch from 'Components/News/NewsSearch/NewsSearch';
import NewsList from 'Components/News/NewsList/NewsList';
import Loader from 'Components/Loader/Loader';

const NewsPage = () => {
  const dispatch = useDispatch();
  const newsItems = useSelector(selectNews);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  return (
    <Section>
      <Container>
        <Title>News</Title>
        <NewsSearch />
        {isLoading && !error && <Loader />}
        {newsItems.length > 0 && <NewsList news={newsItems} />}
      </Container>
    </Section>
  );
};

export default NewsPage;
