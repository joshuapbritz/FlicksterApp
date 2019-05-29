import React from 'react';

import { Link } from 'react-router-dom';

import './TitlesRow.css';

function slug(to) {
  return String(to)
    .toLowerCase()
    .split(' ')
    .join('-');
}

function TitlesRow({ titles, category }) {
  titles = Array.from(titles).slice(0, 5);
  return (
    <div className="Titles">
      <div className="TitlesTitle">
        <h4>{category || 'Something'}</h4>
      </div>

      <div className="TitlesRow">
        {titles.map(title => (
          <Link className="poster" to={`/title/${slug(title.to)}`}>
            <img src={title.image} alt={title.to} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default TitlesRow;
