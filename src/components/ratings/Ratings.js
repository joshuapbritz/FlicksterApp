import React from 'react';

function getStarValue(value, rating) {
  if (value <= rating) {
    return 'star';
  } else if (value - 0.5 === rating) return 'star_half';

  return 'star_border';
}

const styles = {
  display: 'inline-flex',
  alignItems: 'center',
  height: '30px',
  color: 'hsl(46, 100%, 50%)',
};

function Ratings({ rating }) {
  return (
    <div className="ratings" style={styles}>
      <i className="material-icons">{getStarValue(1, rating)}</i>
      <i className="material-icons">{getStarValue(2, rating)}</i>
      <i className="material-icons">{getStarValue(3, rating)}</i>
      <i className="material-icons">{getStarValue(4, rating)}</i>
      <i className="material-icons">{getStarValue(5, rating)}</i>
    </div>
  );
}

export default Ratings;
