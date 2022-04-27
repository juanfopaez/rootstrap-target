import React, { useState } from 'react';

import { Link, useLocation } from 'react-router-dom';

import { menu, close } from 'assets';
import routes from 'routes/routes';

const Header = () => {
  const options = [
    {
      title: 'About',
      path: routes.about.path
    },
    {
      title: 'Contact',
      path: routes.contact.path
    }
  ];

  const [optionsOpen, setOptionsOpen] = useState(false);

  const location = useLocation();

  const onOptionsOpen = () => {
    setOptionsOpen((prevState) => !prevState);
  };

  return (
    <header className="headerWrapper">
      <button type="button" onClick={onOptionsOpen}>
        <img
          src={optionsOpen ? close : menu}
          alt={optionsOpen ? 'close menu' : 'open menu'}
        />
      </button>
      {optionsOpen && (
        <ul>
          {options.map(({ path, title }) => (
            <li key={path}>
              <Link
                to={path}
                onClick={() => setOptionsOpen(false)}
                className={location.pathname === path ? 'selected' : ''}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Header;
