import { PropTypes } from 'prop-types';
import css from './Container.module.css';

const Container = ({ children, className }) => {
  return <div className={`${css.container} ${className}`}>{children}</div>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;


