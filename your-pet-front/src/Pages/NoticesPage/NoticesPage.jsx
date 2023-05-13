import css from 'Pages/NoticesPage/NoticesPage.module.css';

import NoticesSearch from 'Components/Notices/NoticesSearch/NoticesSearch';

const NoticesPage = () => {
  return (
    <div className={css.page_wrap}>
      <h1 className={css.page_title}>Find your favorite pet</h1>
      <NoticesSearch />
    </div>
  );
};

export default NoticesPage;
