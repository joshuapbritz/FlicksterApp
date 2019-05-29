import React from 'react';
import { Link } from 'react-router-dom';

import './Button.css';

function Button({ label, icon, outlined, small, to }) {
  if (outlined === undefined) {
    outlined = false;
  }

  if (small === undefined) {
    small = false;
  }

  if (to) {
    return (
      <Link
        className={`button${outlined ? ' outlined' : ''}${
          small ? ' small' : ''
        }`}
        to={to}
      >
        {!!icon ? <i className="material-icons">{icon}</i> : null}
        <span>{label}</span>
      </Link>
    );
  } else {
    return (
      <button
        className={`button${outlined ? ' outlined' : ''}${
          small ? ' small' : ''
        }`}
      >
        {!!icon ? <i className="material-icons">{icon}</i> : null}
        <span>{label}</span>
      </button>
    );
  }
}

export default Button;
