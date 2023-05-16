import css from './NoticesCategoriesItem.module.css';

const CategoryItem = () => {
  return (
    <ul className={css.card_list}>
      <li className={css.card_item}>
        <div className="card_wrap">
          <img alt="default" className={css.image} />
          <h2 className={css.title}>Сute cat looking for a home</h2>
          <button className={css.btn}>Learn more</button>
        </div>
      </li>
      <li className={css.card_item}>
        <div className="card_wrap">
          <img alt="default" className={css.image} />
          <h2 className={css.title}>Сute cat looking for a home </h2>
          <button className={css.btn}>Learn more</button>
        </div>
      </li>
      <li className={css.card_item}>
        <img alt="default" className={css.image} />
        <h2 className={css.title}>Сute cat looking for a home</h2>
        <button className={css.btn}>Learn more</button>
      </li>
      <li className={css.card_item}>
        <img alt="default" className={css.image} />
        <h2 className={css.title}>Сute cat looking for a home</h2>
        <button className={css.btn}>Learn more</button>
      </li>
    </ul>
  );
};

export default CategoryItem;
