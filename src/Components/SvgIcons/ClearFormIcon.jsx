import PropTypes from 'prop-types';

export const ClearFormIcon = ({ id, className }) => {
  switch (id) {
    case 'svg':
      return (
        <svg
          className={className}
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 1L1 15M1.00004 1L15 15"
            stroke="#54ADFF"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );
    default:
      return <svg></svg>;
  }
};

ClearFormIcon.propTypes = {
  id: PropTypes.string.isRequired,
};
