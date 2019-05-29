import React from 'react';
import poster from './poster1.jpg';
import Button from './components/button/Button';
import InfoContent from './components/info-content/InfoContent';
import SimilarTitles from './components/similar-titles/SimilarTitles';

import Description from './content/description';

import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="Nav">
        <div className="inner">
          <div className="logo">
            <i className="material-icons">tv</i>
            <span>MOVIES APP</span>/<mark>La La Land</mark>
          </div>

          <div className="menu">
            <i className="material-icons">change_history</i>
          </div>
        </div>
      </nav>

      <div className="inner-wrapper">
        <figure className="home">
          <img src={poster} alt="poster" />
        </figure>

        <article>
          <div className="title">
            <h1>La La Land (2016)</h1>
            <span className="genre">Musical | Comedy | Romance</span>
            <div className="ratings">
              <i className="material-icons">star</i>
              <i className="material-icons">star</i>
              <i className="material-icons">star</i>
              <i className="material-icons">star</i>
              <i className="material-icons">star_half</i>
            </div>
            <div className="info">
              <table>
                <tbody>
                  <tr>
                    <td>
                      <strong>Director:</strong>
                    </td>
                    <td>Damien Chazelle</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Writer(s):</strong>
                    </td>
                    <td>Damien Chazelle</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Actors:</strong>
                    </td>
                    <td>
                      Emma Stone, Ryan Gosling, D. A. Wallach, Kiff
                      VandenHeuvel, Arthur Horowitz, John Legend
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Producers:</strong>
                    </td>
                    <td>
                      Gary Gilbert, Marc E. Platt, Jordan Horowitz, Fred Berger,
                      Mike Jackson
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="actions">
            <Button
              outlined={false}
              icon="shopping_basket"
              label="RENT NOW (R50.00)"
            />
            <Button
              outlined={true}
              icon="credit_card"
              label="BUY NOW (R150.00)"
            />
          </div>
        </article>

        <section>
          <h4>Description</h4>
          <InfoContent content={Description} />
          <br />
          <SimilarTitles />
        </section>
      </div>
    </div>
  );
}

export default App;
