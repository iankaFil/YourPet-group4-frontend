import { PropTypes } from 'prop-types';
import css from './Section.module.css';

const Section = ({ children, className  }) => {
  return <div className={`${css.section} ${className}`}>{children}</div>;
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Section;
