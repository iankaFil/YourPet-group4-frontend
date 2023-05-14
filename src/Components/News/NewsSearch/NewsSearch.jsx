import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { BsSearch } from 'react-icons/bs';
// import { RxCross1 } from 'react-icons/rx';

import css from 'Components/News/NewsSearch/NewsSearch.module.css';

import { fetchSearchNews } from 'Redux/news/news-operations';

const NewsSearch = () => {
  const [search, setSearch] = useState('');

  const dispatch = useDispatch();

  const handleFormSubmit = event => {
    event.preventDefault();
    console.log(search);
    dispatch(fetchSearchNews(search));
  };

  const handelInputChange = event => {
    setSearch(event.currentTarget.value.toLowerCase().trim());
  };

  // const resetInput = event => {
  //   setSearch('');
  // };

  return (
    <form className={css.form} onSubmit={handleFormSubmit}>
      <input
        type="text"
        placeholder="Search"
        className={css.input}
        onChange={handelInputChange}
        value={search}
        autoComplete="off"
        autoFocus
      />

      {search && (
        <div>
          <button className={css.btnSearch} type="submit">
            <BsSearch />
          </button>
          {/* <button className={css.btnClose} onClick={resetInput}>
            <RxCross1 />
          </button> */}
        </div>
      )}

      {!search && (
        <div>
          <button className={css.btnSearch} type="submit">
            <BsSearch />
          </button>
        </div>
      )}
    </form>
  );
};

export default NewsSearch;
