import NewsItems from './NewsItems/NewsItems';
import css from 'Components/News/NewsList/NewsList.module.css';

const NewsList = ({ news }) => {
  const sortedNews = [...news].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <ul className={css.list}>
      {sortedNews.map(({ id, title, text, date, imgUrl, url }) => (
        <NewsItems
          key={id}
          id={id}
          title={title}
          text={text}
          date={date}
          imgUrl={imgUrl}
          url={url}
          loading="lazy"
        />
      ))}
    </ul>
  );
};

export default NewsList;
