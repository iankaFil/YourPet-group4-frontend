import { PropTypes } from 'prop-types';
import css from './Section.module.css';

const Section = ({ children }) => {
  return <div className={css.Section}>{children}</div>;
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Section;
