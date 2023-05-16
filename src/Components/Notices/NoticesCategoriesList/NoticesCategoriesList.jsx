import css from './NoticesCategoriesList.module.css';
import CategoryItem from './NoticesCategoriesItem/NoticesCategoriesItem';

const CategoryList = ({ card }) => {
  const sortedCard = [...card].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <ul className={css.card_list}>
      {sortedCard.map(({ id, title, imgUrl }) => (
        <CategoryItem key={id} id={id} title={title} imgUrl={imgUrl} />
      ))}
    </ul>
  );
};
export default CategoryList;

// const NewsList = ({ news }) => {
//   const sortedNews = [...news].sort(
//     (a, b) => new Date(b.date) - new Date(a.date)
//   );

//   return (
//     <ul className={css.list}>
//       {sortedNews.map(({ id, title, text, date, imgUrl, url }) => (
//         <NewsItems
//           key={id}
//           id={id}
//           title={title}
//           text={text}
//           date={date}
//           imgUrl={imgUrl}
//           url={url}
//           loading="lazy"
//         />
//       ))}
//     </ul>
//   );
// };
