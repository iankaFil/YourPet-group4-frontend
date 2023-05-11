import React from 'react';
import { Link } from 'react-router-dom';

function UserNav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/user">User</Link>
        </li>
      </ul>
    </nav>
  );
}

export default UserNav;
