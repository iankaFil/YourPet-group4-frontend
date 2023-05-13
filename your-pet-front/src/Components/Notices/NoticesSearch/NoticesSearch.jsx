import css from 'Components/Notices/NoticesSearch/NoticesSearch.module.css';

const NoticesSearch = () => {
  return (
    <div>
      <form className={css.seacrh_form}>
        <input type="text" placeholder="Search" className={css.input} />
      </form>
    </div>
  );
};

export default NoticesSearch;
