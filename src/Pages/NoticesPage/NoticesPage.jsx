import React from 'react';
import { useLocation } from 'react-router-dom';
import css from 'Pages/NoticesPage/NoticesPage.module.css';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactPaginate from 'react-paginate';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { ToastContainer } from 'react-toastify'; //
import 'react-toastify/dist/ReactToastify.css';

import Section from 'Components/Section';
import Title from 'Components/Title/Title';
import NoticesSearch from 'Components/Notices/NoticesSearch/NoticesSearch';
import NoticesCategoriesNav from 'Components/Notices/NoticesFilters/NoticesFilters';
import CategoryList from 'Components/Notices/NoticesCategoriesList/NoticesCategoriesList';
import { current } from 'Redux/auth/auth-operations';
// import { current } from 'Redux/user/user-operation';
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

import { isUserLogin, getUser } from 'Redux/auth/auth-selectors';

// const fetchData = async () => {
//   try {
//     await Promise.all([dispatch(current()), dispatch(fetchOwnPets())]);
//   } catch (error) {
//     // Обработка ошибок
//   }
// };
// fetchData();

const NoticesPage = () => {
  const dispatch = useDispatch();
  const isLogin = useSelector(isUserLogin);

  const location = useLocation();

  const path = location.pathname;
  console.log('PATH-> ', path);

  const [category, setCategory] = useState(() => extractCategoryFromPath(path));
  console.log('KJHBKJHBKJBKJBKJB', category);

  // let displayPagination;
  // useEffect(() => {
  //   if (category === 'favorites') {
  //     displayPagination = false;
  //   }
  // }, [category, displayPagination]);

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

  const notices = useSelector(selectNotices);

  console.log('NOTICESSSSSSS', notices);

  const isLoading = useSelector(selectIsLoading);

  const user = useSelector(getUser);

  const error = useSelector(selectError);

  const totalPages = useSelector(selectTotalPages);

  console.log('totalPages', totalPages);

  const [activePage, setActivePage] = useState(0);

  useEffect(() => {
    console.log('isLogin', isLogin);
    console.log('activePage', activePage);
    const fetchData = () => {
      if (isLogin && Object.keys(user).length > 0) {
        if (category === 'favorites') {
          console.log(' ВЫЗЫВАЮ DISPATCH 1');
          dispatch(fetchFavotiteNotices());
        } else if (searchQuery) {
          console.log(' ВЫЗЫВАЮ DISPATCH 2');
          dispatch(
            fetchNoticesByTitle({ category, searchQuery, page: activePage + 1 })
          );
        } else if (category === 'user-notices') {
          console.log(' ВЫЗЫВАЮ DISPATCH 3');
          dispatch(fetchUserNotices());
        } else {
          console.log(' ВЫЗЫВАЮ DISPATCH 4');
          dispatch(fetchNoticesByTitle({ category, page: activePage + 1 }));
        }
      } else if (isLogin && Object.keys(user).length === 0) {
        console.log(' ВЫЗЫВАЮ DISPATCH CURRENT 5 isLogin', isLogin);
        dispatch(current())
          .then(() => {
            if (category === 'favorites') {
              console.log(' ВЫЗЫВАЮ DISPATCH 6');
              dispatch(fetchFavotiteNotices());
            } else if (searchQuery) {
              console.log(' ВЫЗЫВАЮ DISPATCH 7');
              dispatch(
                fetchNoticesByTitle({
                  category,
                  searchQuery,
                  page: activePage + 1,
                })
              );
            } else if (category === 'user-notices') {
              console.log(' ВЫЗЫВАЮ DISPATCH 8');
              dispatch(fetchUserNotices());
            } else {
              console.log(' ВЫЗЫВАЮ DISPATCH 9');
              dispatch(fetchNoticesByTitle({ category, page: activePage + 1 }));
            }
          })
          .catch(error => {
            // Не  загрузился Юзер current
            console.log('Error ', error);
          });
      } else if (!isLogin) {
        if (searchQuery) {
          console.log(' ВЫЗЫВАЮ DISPATCH 10');
          dispatch(fetchNoticesByTitle({ category, searchQuery }));
        } else {
          console.log(' ВЫЗЫВАЮ DISPATCH 11');
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
    console.log('handleChangeCategory', value);
    // setCategory('');

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
    console.log('CLICK');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // const page = selected + 1;
    setActivePage(selected);
    // const categoryURL = getCategoryFromURL();
    // dispatch(fetchNoticesByTitle({ category, searchQuery, page }));
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
