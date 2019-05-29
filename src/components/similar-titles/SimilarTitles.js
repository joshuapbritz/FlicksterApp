import React from 'react';

import BeautyAndTheBeast from '../../one.jpg';
import MyFairLady from '../../two.jpg';
import SinginInTheRain from '../../three.jpg';
import GreatestShowman from '../../four.jpg';

import './SimilarTitles.css';

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
