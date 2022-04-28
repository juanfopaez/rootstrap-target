/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

import { close } from 'assets';

interface ModalProps {
  setShowModal: Function;
  children: React.ReactElement;
}

const modalRoot = document.querySelector('#modal-root') as HTMLElement;

const Modal: React.FC<ModalProps> = ({ setShowModal, children }) => {
  const el = useRef(document.createElement('div'));

  useEffect(() => {
    const { current } = el;
    if (modalRoot) {
      modalRoot.appendChild(current);
    }

    return () => {
      if (modalRoot) {
        return void modalRoot.removeChild(current);
      }
      return undefined;
    };
  }, []);

  return createPortal(
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div className="modalWrapper">
      <div className="modal">
        <div className="modal__buttonsWrapper">
          <button type="button" onClick={() => setShowModal(false)}>
            <img src={close} alt="close modal" />
          </button>
        </div>
        <div className="modal__contentWrapper">{children}</div>
      </div>
    </div>,
    el.current
  );
};

export default Modal;
