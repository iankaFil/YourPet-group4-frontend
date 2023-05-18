import PropTypes from 'prop-types';

export const ConfirmIcon = ({ id, className }) => {
  switch (id) {
    case 'svg':
      return (
        <svg
            className={className}
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="13" 
            viewBox="0 0 18 13" 
            fill='none'
        >
            <title>confirm</title>
            <path d="M17 1L6 12L1 7" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"/>

        </svg>
      );
    default:
      return <svg></svg>;
  }
};
  
ConfirmIcon.propTypes = {
  id: PropTypes.string.isRequired,
};
