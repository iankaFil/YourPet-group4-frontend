import PropTypes from 'prop-types';

const CalendarIcon = ({ id, className }) => {
  switch (id) {
    case 'svg':
      return (
        <svg
          className={className}
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 23 23"
          //   fill="none"
        >
          <title>calender</title>
          <path d="M19 6.184v-0.184c0-1.657-1.343-3-3-3s-3 1.343-3 3h-2c0-1.657-1.343-3-3-3s-3 1.343-3 3v0.184c-1.161 0.415-2 1.514-2 2.816v9c0 1.654 1.346 3 3 3h12c1.654 0 3-1.346 3-3v-9c0-1.302-0.839-2.401-2-2.816zM15 6c0-0.552 0.447-1 1-1s1 0.448 1 1v2c0 0.552-0.447 1-1 1s-1-0.448-1-1v-2zM7 6c0-0.552 0.447-1 1-1s1 0.448 1 1v2c0 0.552-0.447 1-1 1s-1-0.448-1-1v-2zM19 18c0 0.551-0.448 1-1 1h-12c-0.552 0-1-0.449-1-1v-6h14v6zM19 11h-14v-2c0-0.551 0.448-1 1-1 0 1.104 0.896 2 2 2s2-0.896 2-2h4c0 1.104 0.896 2 2 2s2-0.896 2-2c0.552 0 1 0.449 1 1v2z"></path>
        </svg>
      );
    default:
      return <svg></svg>;
  }
};

export default CalendarIcon;

CalendarIcon.propTypes = {
  id: PropTypes.string.isRequired,
};