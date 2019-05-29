import React, { Component } from 'react';

import './Home.css';

import Background from '../../background.jpg';
import poster from '../../poster1.jpg';
import Ratings from '../../components/ratings/Ratings';
import Button from '../../components/button/Button';

import TitlesRow from '../../components/titles-row/TitlesRow';

import titles from './titles';

const styles = {
  backgroundImage: `url(${Background})`,
};

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <header className="hero-image" style={styles}>
          <div className="overlay" />

          <div className="inner">
            <div className="image">
              <img src={poster} alt="poster" />
            </div>
            <div className="content">
              <div className="titles">
                <h1>La La Land (2016)</h1>
                <span className="genre">Musical | Comedy | Romance</span>
                <Ratings rating={4.5} />
                <span className="actors">
                  Ryan Gosling / Emma Stone / John Ledgend
                </span>
              </div>

              <div className="actions">
                <Button
                  outlined={false}
                  icon="shopping_basket"
                  label="RENT NOW (R50.00)"
                />

                <Button
                  to="/title/la-la-land"
                  outlined={true}
                  icon="movie"
                  label="VIEW TITLE"
                />
              </div>
            </div>
          </div>
        </header>
        <section className="titles-display">
          <TitlesRow titles={titles.one} category="Musicals" />
        </section>
        <section className="titles-display">
          <TitlesRow titles={titles.two} category="Suspensful/Mystery" />
        </section>
      </div>
    );
  }
}

export default Home;
