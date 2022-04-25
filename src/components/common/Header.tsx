import React, { useState } from 'react';

import { Link, useLocation } from 'react-router-dom';

import { menu, close } from 'assets';

import routes from 'routes/routes';

const Header = () => {
  const Options = [
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
          alt={optionsOpen ? 'close' : 'menu'}
        />
      </button>
      {optionsOpen && (
        <ul>
          {Options.map((option) => (
            <li key={option.path}>
              <Link
                to={option.path}
                onClick={() => setOptionsOpen(false)}
                className={location.pathname === option.path ? 'selected' : ''}
              >
                {option.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Header;
