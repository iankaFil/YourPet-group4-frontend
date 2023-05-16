import css from './NoticesCategoriesItem.module.css';

const CategoryItem = () => {
  return (
    <div className={css.wrap}>
      <ul className={css.list}>
        <li className={css.list_item}>
          <div className={css.card_wrap}>
            <img src="./default2.jpg" alt="default" className={css.image} />
            <h2 className={css.title}>Сute cat looking for a home</h2>
            <button className={css.btn}>Learn more</button>
          </div>
        </li>
        <li className={css.list_item}>
          <div className={css.card_wrap}>
            <img src="./default2.jpg" alt="default" className={css.image} />
            <h2 className={css.title}>Сute cat looking for a home</h2>
            <button className={css.btn}>Learn more</button>
          </div>
        </li>
        <li className={css.list_item}>
          <div className={css.card_wrap}>
            <img src="./default2.jpg" alt="default" className={css.image} />
            <h2 className={css.title}>Сute cat looking for a home</h2>
            <button className={css.btn}>Learn more</button>
          </div>
        </li>
        <li className={css.list_item}>
          <div className={css.card_wrap}>
            <img src="./default2.jpg" alt="default" className={css.image} />
            <h2 className={css.title}>Сute cat looking for a home</h2>
            <button className={css.btn}>Learn more</button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default CategoryItem;
