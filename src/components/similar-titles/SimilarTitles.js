import React from 'react';
import './SimilarTitles.css';

const BeautyAndTheBeast = '/images/one.jpg';
const MyFairLady = '/images/two.jpg';
const SinginInTheRain = `/images/three.jpg`;
const GreatestShowman = `/images/four.jpg`;

function SimilarTitles() {
  return (
    <div className="SimilarTitlesWrapper">
      <div className="SimilarTitlesTitle">
        <h4>You may also like</h4>
      </div>

      <div className="SimilarTitles">
        <div className="poster">
          <img src={BeautyAndTheBeast} alt="Beauty and the Beast" />
        </div>
        <div className="poster">
          <img src={MyFairLady} alt="Beauty and the Beast" />
        </div>
        <div className="poster">
          <img src={SinginInTheRain} alt="Beauty and the Beast" />
        </div>
        <div className="poster">
          <img src={GreatestShowman} alt="Beauty and the Beast" />
        </div>
      </div>
    </div>
  );
}

export default SimilarTitles;
