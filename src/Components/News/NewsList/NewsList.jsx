import NewsItems from './NewsItems/NewsItems';
// import css from 'Components/News/NewsList/NewsList.module.css';

const NewsList = ({ news }) => {
  return (
    <ul>
      <p>test</p>
      {news.map(({ id, title, text, date, imgUrl, url }) => (
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
