import React from 'react';
import css from 'Pages/NoticesPage/NoticesPage.module.css';
import Title from 'Components/Title/Title';
import NoticesSearch from 'Components/Notices/NoticesSearch/NoticesSearch';
import NoticesCategoriesNav from 'Components/Notices/NoticesFilters/NoticesFilters';
import CategoryItem from 'Components/Notices/NoticesCategoriesList/NoticesCategoriesItem/NoticesCategoriesItem';

const NoticesPage = () => {
  return (
    <div className={css.page_wrap}>
      <Title>Find your favorite pet</Title>
      <NoticesSearch />
      <NoticesCategoriesNav />
      <CategoryItem />
    </div>
  );
};

export default NoticesPage;
