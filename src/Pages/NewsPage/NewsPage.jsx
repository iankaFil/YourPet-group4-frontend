import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import ReactPaginate from 'react-paginate';
// import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

import { fetchNews } from 'Redux/news/news-operations';
import {
  selectIsLoading,
  selectError,
  selectNews,
  selectTotalPages,
} from 'Redux/news/news-selectors';

import css from 'Pages/NewsPage/NewsPage.module.css';

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
  const totalPages = useSelector(selectTotalPages);

  const [searchQuery, setSearchQuery] = useState('');
  const [activePage, setActivePage] = useState(0);

  const handleSearchChange = value => {
    setSearchQuery(value);
    setActivePage(0);
  };

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchNews({ searchQuery }));
  }, [dispatch, searchQuery]);

  const handlePageClick = ({ selected }) => {
    console.log('CLICK');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const page = selected + 1;
    setActivePage(selected);
    dispatch(fetchNews({ searchQuery, page }));
  };

  return (
    <Section>
      <Container>
        <Title>News</Title>
        <NewsSearch handleSearchChange={handleSearchChange} />
        {isLoading && !error && <Loader />}
        {newsItems.length > 0 && <NewsList news={newsItems} />}

        {/* {newsItems.length > 0 && (
          <div className={css.wrapper}>
            <ReactPaginate
              previousLabel={<BsArrowLeft />}
              nextLabel={<BsArrowRight />}
              pageCount={Math.ceil(totalPages) || 0}
              onPageChange={handlePageClick}
              containerClassName={css.pagination}
              activeClassName={css.paginationActive}
              pageRangeDisplayed={2}
              marginPagesDisplayed={2}
              breakLabel={'...'}
              forcePage={activePage}
            />
          </div>
        )} */}
      </Container>
    </Section>
  );
};

export default NewsPage;
