import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactPaginate from 'react-paginate';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

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

  // const [fieldValue, setFieldValue] = useState('');

  // const handleFieldChange = value => {
  //   setFieldValue(value);
  // };

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  const handlePageClick = ({ selected }) => {
    dispatch(fetchNews(selected + 1));
  };

  return (
    <Section>
      <Container>
        <Title>News</Title>
        {/* <NewsSearch onFieldChange={handleFieldChange} /> */}
        <NewsSearch />
        {isLoading && !error && <Loader />}
        {newsItems.length > 0 && <NewsList news={newsItems} />}

        <div className={css.wrapper}>
          <ReactPaginate
            pageCount={Math.ceil(totalPages) || 0}
            marginPagesDisplayed={2}
            pageRangeDisplayed={2}
            onPageChange={handlePageClick}
            previousLabel={<BsArrowLeft />}
            nextLabel={<BsArrowRight />}
            breakLabel={'...'}
            containerClassName={css.pagination}
            previousClassName={css['pagination-button']}
            nextClassName={css['pagination-button']}
            pageClassName={css['pagination-button']}
            activeClassName={css['pagination-active']}
          />
        </div>
      </Container>
    </Section>
  );
};

export default NewsPage;
