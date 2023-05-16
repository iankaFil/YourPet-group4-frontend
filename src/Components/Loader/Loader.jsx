import { Circles } from 'react-loader-spinner';

const Loader = () => {
  return (
    <Circles
      height="80"
      width="80"
      color="#54ADFF"
      ariaLabel="circles-loading"
      wrapperStyle={{ margin: '0 auto', display: 'block' }}
      wrapperClass=""
      visible={true}
    />
  );
};

export default Loader;
