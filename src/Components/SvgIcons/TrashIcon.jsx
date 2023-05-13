import PropTypes from 'prop-types';

export const TrashIcon = ({ id, className }) => {
  switch (id) {
    case 'svg':
      return (
        <svg
            className={className}
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24" 
            viewBox="0 0 24 24" 
            fill='none'
        >
            <title>trash</title>
            <path d="M18 6V18C18 19.1046 17.1046 20 16 20H8C6.89543 20 6 19.1046 6 18V6M15 6V5C15 3.89543 14.1046 3 13 3H11C9.89543 3 9 3.89543 9 5V6M4 6H20M10 10V16M14 10V16"/>
        </svg>
      );
    default:
      return <svg></svg>;
  }
};

TrashIcon.propTypes = {
  id: PropTypes.string.isRequired,
};