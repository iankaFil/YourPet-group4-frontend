import css from 'Components/News/NewsSearch/NewsSearch.module.css';

const NewsSearch = () => {
  return (
    <form className={css.form}>
      <input type="text" placeholder="Search" className={css.input} />
    </form>
  );
};

export default NewsSearch;
