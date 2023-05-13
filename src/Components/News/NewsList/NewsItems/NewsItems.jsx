// import css from 'Components/News/NewsItems/NewsItems.module.css';

const NewsItems = ({ id, title, text, date, imgUrl, url }) => {
  return (
    <li key={id}>
      <image src={imgUrl} alt={title} loading="lazy"></image>
      <h2>{title}</h2>
      <p>{text}</p>
      <p>{text}</p>
      <p>{date}</p>
      <a href={url} _blank>
        Read more
      </a>
    </li>
  );
};

export default NewsItems;
