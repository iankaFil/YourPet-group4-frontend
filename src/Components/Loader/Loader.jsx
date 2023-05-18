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
          position: 'absolute',
          display: 'block',
          top: '50%',
          left: '50%',
          translate: '(-50%,-50%)',
        }}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
