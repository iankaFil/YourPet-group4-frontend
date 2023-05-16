import { Circles } from 'react-loader-spinner';
import css from './Loader.module.css';

const Loader = () => {
  return (
    <div className={css.loaderBox}>
      <Circles
        height="80"
        width="80"
        color="#54ADFF"
        ariaLabel="circles-loading"
        wrapperStyle={{
          margin: '0 auto',
          display: 'block',
        }}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
