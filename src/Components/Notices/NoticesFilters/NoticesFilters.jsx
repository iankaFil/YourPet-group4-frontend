import React from 'react';
import classnames from 'classnames';
import css from 'Components/Notices/NoticesFilters/NoticesFilters.module.css';

const NoticesCategoriesNav = () => {
  const activeClass = css.active;

  return (
    <div className={css.navigationContainer}>
      <ul className={css.linksContainer}>
        <li className={classnames(css.link, { [activeClass]: true })}>sell</li>
        <li className={classnames(css.link, { [activeClass]: true })}>
          lost/found
        </li>
        <li className={classnames(css.link, { [activeClass]: true })}>
          in good hands
        </li>
        <li className={classnames(css.link, { [activeClass]: true })}>
          favorite ads
        </li>
        <li className={classnames(css.link, { [activeClass]: true })}>
          my ads
        </li>
      </ul>
      <ul className={css.addButtonContainer}>
        <li className={classnames(css.link, { [activeClass]: true })}>
          Filter
        </li>
        <li className={classnames(css.addButton, { [activeClass]: true })}>
          Add Pet
        </li>
      </ul>
    </div>
  );
};

export default NoticesCategoriesNav;
