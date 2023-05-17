import PropTypes from 'prop-types';

const LogoutIcon = ({ id, className }) => {
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
            <title>logout</title>
            <path d="M14 4L18 4C19.1046 4 20 4.89543 20 6V18C20 19.1046 19.1046 20 18 20H14M3 12L15 12M3 12L7 8M3 12L7 16" />
        </svg>
      );
    default:
      return <svg></svg>;
  }
};
 

export default LogoutIcon;

LogoutIcon.propTypes = {
  id: PropTypes.string.isRequired,
};