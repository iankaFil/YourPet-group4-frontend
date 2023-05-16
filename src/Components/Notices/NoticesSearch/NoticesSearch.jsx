import { useState } from 'react';
// import { useDispatch } from 'react-redux';

import { BsSearch } from 'react-icons/bs';
import { RxCross1 } from 'react-icons/rx';

import css from 'Components/Notices/NoticesSearch/NoticesSearch.module.css';

// import { fetchSearchNews } from 'Redux/news/news-operations';

const NoticesSearch = ({ handleSearchChange }) => {
  const [search, setSearch] = useState('');

  // const dispatch = useDispatch();

  const handleFormSubmit = event => {
    event.preventDefault();
    // dispatch(fetchSearchNews(search));
    handleSearchChange(search);
  };

  const handelInputChange = event => {
    setSearch(event.currentTarget.value.toLowerCase().trim());
  };

  const handleClearClick = event => {
    setSearch('');
  };

  return (
    <form className={css.form} onSubmit={handleFormSubmit}>
      <div className={css.formContainer}>
        <input
          type="text"
          placeholder="Search"
          className={css.input}
          onChange={handelInputChange}
          value={search}
          autoComplete="off"
          autoFocus
        />

        <button className={css.btnSearch} type="submit">
          <BsSearch />
        </button>

        {search.length > 0 && (
          <button className={css.btnClear} onClick={handleClearClick}>
            <RxCross1 />
          </button>
        )}
      </div>
    </form>
  );
};

export default NoticesSearch;
