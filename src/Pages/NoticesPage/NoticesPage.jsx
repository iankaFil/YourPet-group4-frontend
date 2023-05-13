import React from 'react';
import css from 'Pages/NoticesPage/NoticesPage.module.css';

import NoticesSearch from 'Components/Notices/NoticesSearch/NoticesSearch';
import NoticesCategoriesNav from 'Components/Notices/NoticesFilters/NoticesFilters';

const NoticesPage = () => {
  return (
    <div className={css.page_wrap}>
      <h1 className={css.page_title}>Find your favorite pet</h1>
      <NoticesSearch />
      <NoticesCategoriesNav />
    </div>
  );
};

export default NoticesPage;
