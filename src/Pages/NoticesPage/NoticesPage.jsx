import React from 'react';
import { useLocation } from 'react-router-dom';
import css from 'Pages/NoticesPage/NoticesPage.module.css';
import { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactPaginate from 'react-paginate';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';
import Zaglushka from '../../Shared/images/zaglushka.png';
import Section from 'Components/Section';
import Title from 'Components/Title/Title';
import NoticesSearch from 'Components/Notices/NoticesSearch/NoticesSearch';
import NoticesCategoriesNav from 'Components/Notices/NoticesFilters/NoticesFilters';
import CategoryList from 'Components/Notices/NoticesCategoriesList/NoticesCategoriesList';
import { current } from 'Redux/auth/auth-operations';
import Container from 'Components/Container/Container';
import Loader from 'Components/Loader/Loader';

import {
  fetchNoticesByTitle,
  fetchFavotiteNotices,
  fetchUserNotices,
} from 'Redux/notices/notices-operations';

import {
  selectIsLoading,
  selectError,
  selectNotices,
  selectTotalPages,
} from 'Redux/notices/notices-selectors';

import { isUserLogin, getUser } from 'Redux/auth/auth-selectors';

import { setFilter } from 'Redux/filters/filters-slice';

const NoticesPage = () => {
  const dispatch = useDispatch();
  const isLogin = useSelector(isUserLogin);

  const location = useLocation();

  const path = location.pathname;
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
    const pathSegments = path.split('/');

    const validPath = transformCategorie(pathSegments[2]);

    if (pathSegments[2] === 'for-free') {
      return 'in-good-hands';
    }
    return validPath;
  }

  const [searchQuery, setSearchQuery] = useState('');

  const notices = useSelector(selectNotices);

  const isLoading = useSelector(selectIsLoading);

  const user = useSelector(getUser);

  const error = useSelector(selectError);

  const totalPages = useSelector(selectTotalPages);

  const [activePage, setActivePage] = useState(0);

  const handleFilterChange = useCallback(
    (filterName, filterValue) => {
      dispatch(setFilter({ filterName, filterValue }));
    },
    [dispatch]
  );

  useEffect(() => {
    dispatch(fetchNoticesByTitle());
  }, [dispatch]);

  useEffect(() => {
    handleFilterChange('category', category);
    setActivePage(0);
    
  }, [category, dispatch, handleFilterChange]);

  useEffect(() => {
    handleFilterChange('page', activePage + 1);
  }, [activePage, dispatch, handleFilterChange]);

  useEffect(() => {
    setActivePage(0);
    handleFilterChange('searchQuery', searchQuery);
  }, [searchQuery, dispatch, handleFilterChange]);

  useEffect(() => {
    const fetchData = () => {
      if (isLogin && Object.keys(user).length > 0) {
        if (category === 'favorites') {
          dispatch(fetchFavotiteNotices());
        } else if (searchQuery) {
          dispatch(
            fetchNoticesByTitle({ category, searchQuery, page: activePage + 1 })
          );
        } else if (category === 'user-notices') {
          dispatch(fetchUserNotices());
        } else {
          dispatch(fetchNoticesByTitle({ category, page: activePage + 1 }));
        }
      } else if (isLogin && Object.keys(user).length === 0) {
        dispatch(current())
          .then(() => {
            if (category === 'favorites') {
              dispatch(fetchFavotiteNotices());
            } else if (searchQuery) {
              dispatch(
                fetchNoticesByTitle({
                  category,
                  searchQuery,
                  page: activePage + 1,
                })
              );
            } else if (category === 'user-notices') {
              dispatch(fetchUserNotices());
            } else {
              dispatch(fetchNoticesByTitle({ category, page: activePage + 1 }));
            }
          })
          .catch(error => {
          });
      } else if (!isLogin) {
        if (searchQuery) {
          dispatch(fetchNoticesByTitle({ category, searchQuery }));
        } else {
          dispatch(fetchNoticesByTitle({ category }));
        }
      }
    };

    fetchData();
  }, [category, dispatch, searchQuery, isLogin, user, activePage]);

  const handleSearchChange = value => {
    setSearchQuery(value);
  };

  const handleChangeCategory = value => {
    setActivePage(0);
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
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActivePage(selected);
  };

  return (
    <Section>
      <Container>
        <Title>Find your favorite pet</Title>
        <NoticesSearch
          handleSearchChange={handleSearchChange}
          handleChangeCategory={handleChangeCategory}
        />
        <NoticesCategoriesNav handleChangeCategory={handleChangeCategory} />
        {!notices.length && (
          <div className={css.zaglushka}>
            <img className={css.zaglushkaImg} src={Zaglushka} alt="Заглушка" />
            <p>It's nothing here, because I ate all.</p>
          </div>
        )}
        {isLoading && !error ? <Loader /> : <CategoryList card={notices} />}
        {category !== 'favorites' &&
          category !== 'user-notices' &&
          notices &&
          totalPages > 1 &&
          notices.length > 0 && (
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
