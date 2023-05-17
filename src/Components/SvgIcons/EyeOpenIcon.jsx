import PropTypes from 'prop-types';

export const EyeOpenIcon = ({ id, className, onClick }) => {
  switch (id) {
    case 'svg':
      return (
        <svg
          className={className}
          onClick={onClick}
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24" 
          viewBox="0 0 24 24" 
          fill='none'
        >
          <title>eye-open</title>
          <g>
              <path d="M2 12C2 12 5.63636 5 12 5C18.3636 5 22 12 22 12C22 12 18.3636 19 12 19C5.63636 19 2 12 2 12Z" stroke="#54ADFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#54ADFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </g>
        </svg>
      );
    default:
      return <svg></svg>;
  }
};

EyeOpenIcon.propTypes = {
  id: PropTypes.string.isRequired,
};