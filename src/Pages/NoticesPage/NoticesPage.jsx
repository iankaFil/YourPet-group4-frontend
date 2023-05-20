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

// import { fetchNews } from 'Redux/news/news-operations';

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

  const [activePage, setActivePage] = useState(0);

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

  const handlePageClick = ({ selected }) => {
    console.log('CLICK');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const page = selected + 1;
    setActivePage(selected);
    const categoryURL = getCategoryFromURL();
    dispatch(fetchNoticesByTitle({ category: categoryURL, searchQuery, page }));
  };

  return (
    <Section>
      {isLoading && !error && <Loader />}
      <Container>
        <Title>Find your favorite pet</Title>
        <NoticesSearch handleSearchChange={handleSearchChange} />
        <NoticesCategoriesNav handleCategory={handleCategory} />

        {categoryItem && categoryItem.length > 0 && (
          <CategoryList card={categoryItem} />
        )}
        {categoryItem && categoryItem.length > 0 && (
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
        )}
      </Container>
    </Section>
  );
};

export default NoticesPage;
