import css from './NoticesCategoriesList.module.css';
import CategoryItem from './NoticesCategoriesItem/NoticesCategoriesItem';

const CategoryList = ({ card }) => {
  const sortedCard = [...card].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <ul className={css.card_list}>
      {sortedCard.map(({ _id, title, url }) => (
        <CategoryItem key={_id} id={_id} title={title} imgUrl={url} />
      ))}
    </ul>
  );
};
export default CategoryList;
