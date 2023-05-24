import css from './NoticesCategoriesList.module.css';
import CategoryItem from './NoticesCategoriesItem/NoticesCategoriesItem';

const CategoryList = ({ card }) => {
  const sortedCard = [...card].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <ul className={css.card_list}>
      {sortedCard.map(card => (
        <CategoryItem
          {...card}
          key={card._id}
          // title={title}
          // imgUrl={photoURL}
          // birthday={birthday}
          // sex={sex}
          // place={place}
        />
      ))}
    </ul>
  );
};
export default CategoryList;
