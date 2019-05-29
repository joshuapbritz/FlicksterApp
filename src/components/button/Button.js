import React from 'react';

import './Button.css';

function Button({ label, icon, outlined }) {
  if (outlined === undefined) {
    outlined = false;
  }

  return (
    <button className={`button${outlined ? ' outlined' : ''}`}>
      {!!icon ? <i className="material-icons">{icon}</i> : null}
      <span>{label}</span>
    </button>
  );
}

export default Button;
