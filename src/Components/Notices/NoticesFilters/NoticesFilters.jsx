import css from 'Components/Notices/NoticesFilters/NoticesFilters.module.css';

import React from 'react';

const NoticesCategoriesNav = () => {
  return (
    <div className={css.navigationContainer}>
      <ul className={css.linksContainer}>
        <li className={css.link} activeClassName="active">
          <a href="#"></a>sell
        </li>
        <li className={css.link} activeClassName="active">
          <a href="#"></a>
          lost/found
        </li>
        <li className={css.link} activeClassName="active">
          <a href="#"></a>in good hands
        </li>
        <li className={css.link} activeClassName="active">
            <a href="#"></a>favorite ads
          </li>
          <li className={css.link} activeClassName="active">
            <a href="#"></a>my ads
          </li>
      </ul>
      <ul className={css.addButtonContainer}>
        <li className={css.link} activeClassName="active">
          <a href="#"></a> Filter
        </li>
        <li className={css.addButton} activeClassName="active">
          <a href="#"></a> Add Pet
        </li>
      </ul>
    </div>
  );
};

export default NoticesCategoriesNav;
