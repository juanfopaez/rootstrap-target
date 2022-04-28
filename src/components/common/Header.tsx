import React, { useEffect, useRef, useState } from 'react';

import { Link, useLocation } from 'react-router-dom';

import { menu, close } from 'assets';
import routes from 'routes/routes';
import assertIsNode from 'utils/assertIsNode';
import { Contact } from 'pages';
import Modal from './Modal';

const Header = () => {
  const [optionsOpen, setOptionsOpen] = useState(false);
  const [showModal, setShowModal] = useState(true);

  const location = useLocation();

  const onOptionsOpen = () => {
    setOptionsOpen((prevState) => !prevState);
  };

  const onShowModal = () => {
    setShowModal(true);
    setOptionsOpen(false);
  };

  const useOutside = (ref: React.RefObject<HTMLDivElement>) => {
    useEffect(() => {
      const handleClickOutside = ({ target }: MouseEvent) => {
        assertIsNode(target);
        if (
          ref.current &&
          !ref.current.contains(target as Node) &&
          optionsOpen
        ) {
          setOptionsOpen(false);
        }
      };
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref, optionsOpen]);
  };

  const wrapperRef = useRef<HTMLDivElement>(null);
  useOutside(wrapperRef);

  return (
    <>
      <header ref={wrapperRef} className="headerWrapper">
        <button type="button" onClick={onOptionsOpen}>
          <img
            src={optionsOpen ? close : menu}
            alt={optionsOpen ? 'close menu' : 'open menu'}
          />
        </button>
        {optionsOpen && (
          <ul>
            <li>
              <Link
                to={routes.about.path}
                onClick={() => setOptionsOpen(false)}
                className={
                  location.pathname === routes.about.path ? 'selected' : ''
                }
              >
                About
              </Link>
            </li>
            <li>
              <button type="button" onClick={onShowModal}>
                Contact
              </button>
            </li>
          </ul>
        )}
      </header>
      {showModal && (
        <Modal setShowModal={setShowModal}>
          <Contact />
        </Modal>
      )}
    </>
  );
};

export default Header;
