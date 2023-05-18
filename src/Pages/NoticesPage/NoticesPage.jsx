import React from 'react';
import css from 'Pages/NoticesPage/NoticesPage.module.css';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactPaginate from 'react-paginate';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import Section from 'Components/Section';
import Title from 'Components/Title/Title';
import NoticesSearch from 'Components/Notices/NoticesSearch/NoticesSearch';
import NoticesCategoriesNav from 'Components/Notices/NoticesFilters/NoticesFilters';
import CategoryList from 'Components/Notices/NoticesCategoriesList/NoticesCategoriesList';
// import CategoryItem from 'Components/Notices/NoticesCategoriesList/NoticesCategoriesItem/NoticesCategoriesItem';
import Container from 'Components/Container/Container';
import Loader from 'Components/Loader/Loader';

import {
  fetchNoticesByTitle,
  fetchNoticesByCategory,
} from 'Redux/notices/notices-operations';

import {
  selectIsLoading,
  selectError,
  selectNotices,
  selectTotalPages,
} from 'Redux/notices/notices-selectors';

const NoticesPage = () => {
  const dispatch = useDispatch();
  const categoryItem = useSelector(selectNotices);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const totalPages = useSelector(selectTotalPages);

  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState('');

  const handleSearchChange = value => {
    setSearchQuery(value);
  };

  

  const handleCategory = value => {
    switch (value) {
      case 'lost/found':
        setCategory('lost-found');
        break;

      case 'in good hands':
        setCategory('in-good-hands');
        break;

      default:
        setCategory(value);
        break;
    }
  };

  const getCategoryFromURL = () => {
    const path = window.location.pathname;
    const categoryURL = path.split('/').pop();
    if (categoryURL === 'for-free') {
      return 'in-good-hand';
    }
    return categoryURL;
  };

  //первий рендер
  useEffect(() => {
    const categoryURL = getCategoryFromURL();
    dispatch(fetchNoticesByCategory(categoryURL));
  }, [dispatch]);

  // при изменении категории через фильтр
  useEffect(() => {
    dispatch(fetchNoticesByTitle({ category, searchQuery }));
  }, [category, searchQuery, dispatch]);

  //при клике на пагинацию
  const handlePageClick = ({ selected }) => {
    const page = selected + 1;
    const categoryURL = getCategoryFromURL();
    dispatch(fetchNoticesByTitle({ category: categoryURL, searchQuery, page }));
  };

  return (
    <Section>
      <Container>
        <Title>Find your favorite pet</Title>
        <NoticesSearch handleSearchChange={handleSearchChange} />
        <NoticesCategoriesNav handleCategory={handleCategory} />

        {isLoading && !error && <Loader />}
        {categoryItem && categoryItem.length > 0 && (
          <CategoryList card={categoryItem} />
        )}
        {categoryItem && categoryItem.length > 0 && (
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
        )}
      </Container>
    </Section>
  );
};

export default NoticesPage;
