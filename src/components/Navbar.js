import React, { useState } from 'react';
import './Navbar.css';
import { withRouter, Link } from 'react-router-dom';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <nav>
        <div className='logo'>Portfolio</div>
        <ul
          className='nav-links'
          style={{ transform: open ? 'translateX(0px)' : '' }}
        >
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Contacts</a>
          </li>
          <li>
            <Link to='/login'>Login</Link>
          </li>
        </ul>
        <i onClick={() => setOpen(!open)} className='fas fa-bars bar'></i>
        {/* used font awesome and cdn js */}
      </nav>
    </div>
  );
};

export default withRouter(Navbar);
