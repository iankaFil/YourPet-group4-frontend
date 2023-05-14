import { PropTypes } from 'prop-types';
import css from './Title.module.css';

const Title = ({ children, className }) => {
  return <h1 className={`${css.title} ${className}`}>{children}</h1>;
};

Title.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Title;
