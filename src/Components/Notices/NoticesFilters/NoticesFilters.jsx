import css from 'Components/Notices/NoticesFilters/NoticesFilters.module.css';

import React from 'react';

const NoticesCategoriesNav = () => {
  return (
    <div className={css.navigationContainer}>
      <ul className={css.linksContainer}>
        <li className={css.link} activeClassName="active">
          sell
        </li>
        <li className={css.link} activeClassName="active">
          lost/found
        </li>
        <li className={css.link} activeClassName="active">
          in good hands
        </li>
        <li className={css.link} activeClassName="active">
          favorite ads
        </li>
        <li className={css.link} activeClassName="active">
          my ads
        </li>
      </ul>
      <ul className={css.addButtonContainer}>
        <li className={css.link} activeClassName="active">
          Filter
        </li>
        <li className={css.addButton} activeClassName="active">
          Add Pet
        </li>
      </ul>
    </div>
  );
};

export default NoticesCategoriesNav;
