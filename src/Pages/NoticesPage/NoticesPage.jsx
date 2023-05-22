import React from 'react';
import { useLocation } from 'react-router-dom';
import css from 'Pages/NoticesPage/NoticesPage.module.css';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactPaginate from 'react-paginate';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
  fetchFavotiteNotices,
  fetchUserNotices,
  // fetchNoticesByCategory,
} from 'Redux/notices/notices-operations';

import {
  selectIsLoading,
  selectError,
  selectNotices,
  selectTotalPages,
} from 'Redux/notices/notices-selectors';

const NoticesPage = () => {
  const dispatch = useDispatch();

  const location = useLocation();

  const path = location.pathname;
  console.log('PATH-> ', path);

  const [category, setCategory] = useState(() => extractCategoryFromPath(path));

  function transformCategorie(value) {
    switch (value) {
      case 'lost/found':
        return 'lost-found';

      case 'in good hands':
        return 'in-good-hands';

      case 'favorite ads':
      case 'favorite':
        return 'favorites';

      case 'my ads':
        return 'own';

      case 'own':
        return 'user-notices';

      default:
        return value;
    }
  }

  function extractCategoryFromPath(path) {
    console.log('PATH-> ', path);
    const pathSegments = path.split('/');

    const validPath = transformCategorie(pathSegments[2]);
    console.log('VALIDDDDD PATH-> ', validPath);

    if (pathSegments[2] === 'for-free') {
      return 'in-good-hands';
    }
    return validPath;
  }

  const [searchQuery, setSearchQuery] = useState('');

  // при изменении категории через фильтр
  useEffect(() => {
    if (category === 'favorites' && searchQuery === '') {
      dispatch(fetchFavotiteNotices());
    } else if (category === 'user-notices') {
      dispatch(fetchUserNotices());
    } else {
      dispatch(fetchNoticesByTitle({ category, searchQuery }));
    }
  }, [category, searchQuery, dispatch]);

const error = useSelector(selectError);

  useEffect(() => {
    if (error) {
      toast.info('There are no notices for this request');
    }
  }, [error]);


  const notices = useSelector(selectNotices);

  console.log('NOTICESSSSSSS', notices);

  const isLoading = useSelector(selectIsLoading);
  
  const totalPages = useSelector(selectTotalPages);

  const [activePage, setActivePage] = useState(0);

  const handleSearchChange = value => {
    setSearchQuery(value);
  };

  const handleChangeCategory = value => {
    console.log('handleChangeCategory', value);
    // setCategory('');
    switch (value) {
      case 'lost/found':
        setCategory('lost-found');
        break;

      case 'in good hands':
        setCategory('in-good-hands');
        break;

      case 'favorite ads':
        setCategory('favorites');
        break;

      case 'my ads':
        setCategory('user-notices');
        break;

      case 'favorite':
        setCategory('favorites');
        break;

      default:
        setCategory(value);
        break;
    }
    setSearchQuery('');
  };

  const handlePageClick = ({ selected }) => {
    console.log('CLICK');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const page = selected + 1;
    setActivePage(selected);
    // const categoryURL = getCategoryFromURL();
    dispatch(fetchNoticesByTitle({ category, searchQuery, page }));
  };

  return (
    <Section>
      {isLoading && !error && <Loader />}
      <Container>
        <Title>Find your favorite pet</Title>
        <NoticesSearch
          handleSearchChange={handleSearchChange}
          handleChangeCategory={handleChangeCategory}
        />
        <NoticesCategoriesNav handleChangeCategory={handleChangeCategory} />

        {notices && notices.length > 0 && <CategoryList card={notices} />}
        {notices && notices.length > 0 && (
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
        <ToastContainer autoClose={1400} position="top-center" />
      </Container>
    </Section>
  );
};

export default NoticesPage;
