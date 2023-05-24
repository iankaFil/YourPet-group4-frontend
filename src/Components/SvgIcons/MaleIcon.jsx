import PropTypes from 'prop-types';

export const MaleIcon = ({ id, className }) => {
  switch (id) {
    case 'svg':
      return (
        <svg
          className={className}
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.7578 11C9.99639 11 7.75781 13.2386 7.75781 16C7.75781 18.7614 9.99639 21 12.7578 21C15.5192 21 17.7578 18.7614 17.7578 16C17.7578 13.2386 15.5192 11 12.7578 11ZM12.7578 11V3M12.7578 3L16.7578 7M12.7578 3L8.75781 7"
            stroke="#54ADFF"
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


MaleIcon.propTypes = {
  id: PropTypes.string.isRequired,
};
