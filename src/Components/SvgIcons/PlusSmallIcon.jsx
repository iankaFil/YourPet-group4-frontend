import PropTypes from 'prop-types';

export const PlusSmallIcon = ({ id, className }) => {
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
          fill="none"
        >
          <title>plus-small</title>
          <path
            d="M12 7V17M7 12L17 12"
            stroke="#FEF9F9"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    default:
      return <svg></svg>;
  }
};

PlusSmallIcon.propTypes = {
  id: PropTypes.string.isRequired,
};
