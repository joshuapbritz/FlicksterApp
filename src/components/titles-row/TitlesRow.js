import React from 'react';

import { Link } from 'react-router-dom';

import './TitlesRow.css';

const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  );

function TitlesRow({ titles, category }) {
  titles = chunk(Array.from(titles), 5);
  return (
    <div className="Titles">
      <div className="TitlesTitle">
        <h4>Featured Titles</h4>
      </div>

      {titles.map((row, rowindex) => (
        <div className="TitlesRow" key={rowindex}>
          {row.map((title, titleindex) => (
            <Link
              className="poster"
              to={`/title/${title.to}`}
              key={`${rowindex}-${titleindex}`}
            >
              <img src={title.image} alt={title.to} />
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
}

export default TitlesRow;
