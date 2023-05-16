import css from 'Components/News/NewsList/NewsItems/NewsItems.module.css';
import dayjs from 'dayjs';

const NewsItems = ({ id, title, text, date, imgUrl, url }) => {
  const formattedDate = dayjs(date).format('DD/MM/YYYY');

  return (
    <li key={id} className={css.item}>
      <div className={css.itemLine}></div>
      <img src={imgUrl} alt={title} loading="lazy" className={css.image}></img>
      <div className={css.itemBox}>
        <h2 className={css.title}>{title}</h2>
        <p className={css.text}>{text}</p>

        <div className={css.itemWrapper}>
          <p className={css.date}>{formattedDate}</p>
          <a href={url} target="_ blank" className={css.link}>
            Read more
          </a>
        </div>
      </div>
    </li>
  );
};

export default NewsItems;
