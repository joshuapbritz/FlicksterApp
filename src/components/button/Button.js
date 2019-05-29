import React from 'react';

import './Button.css';

function Button({ label, icon, outlined, small }) {
  if (outlined === undefined) {
    outlined = false;
  }

  if (small === undefined) {
    small = false;
  }

  return (
    <button
      className={`button${outlined ? ' outlined' : ''}${small ? ' small' : ''}`}
    >
      {!!icon ? <i className="material-icons">{icon}</i> : null}
      <span>{label}</span>
    </button>
  );
}

export default Button;
