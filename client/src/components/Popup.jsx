import React from 'react';
import './Popup.css';
import { useRef, useEffect } from 'react';
import { GoX } from 'react-icons/go';

function Popup(props) {
  let popupRef = useRef();

  useEffect(() => {
    let handler = (event) => {
      if (!popupRef.current?.contains(event.target)) {
        props.setTrigger(false);
      }
    };

    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    };
  });

  return props.trigger ? (
    <div className="popup">
      <div ref={popupRef} className="popup-inner">
        <button
          className="button-close"
          onClick={() => props.setTrigger(false)}
          style={{
            width: '30px',
            height: '30px',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
          <GoX style={{ marginBottom: '0.2em', marginRight: '0.3em' }}></GoX>
        </button>
        {props.children}
      </div>
    </div>
  ) : (
    ''
  );
}

export default Popup;
