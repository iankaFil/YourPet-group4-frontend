import PropTypes from 'prop-types';

const CameraIcon = ({ id, className }) => {
  switch (id) {
    case 'svg':
      return (
        <svg
            className={className}
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="16" 
            viewBox="0 0 20 16" 
            fill='none'
        >
            <title>camera</title>
            <g>
                <path d="M10 12C11.6569 12 13 10.6569 13 9C13 7.34315 11.6569 6 10 6C8.34315 6 7 7.34315 7 9C7 10.6569 8.34315 12 10 12Z" stroke="#54ADFF" strokeWidth="1.5" strokeLinejoin="round"/>
                <path d="M1 5C1 3.89543 1.89543 3 3 3H5.5C6.05228 3 6.5 2.55228 6.5 2C6.5 1.44772 6.94772 1 7.5 1H12.5C13.0523 1 13.5 1.44772 13.5 2C13.5 2.55228 13.9477 3 14.5 3H17C18.1046 3 19 3.89543 19 5V13C19 14.1046 18.1046 15 17 15H3C1.89543 15 1 14.1046 1 13V5Z" stroke="#54ADFF" strokeWidth="1.5" strokeLinejoin="round"/>
            </g>
        </svg>
      );
    default:
      return <svg></svg>;
  }
};
 

export default CameraIcon;

CameraIcon.propTypes = {
  id: PropTypes.string.isRequired,
};