import React from 'react';
import poster from './poster1.jpg';
import Button from './components/button/Button';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="Nav">
        <div className="inner">
          <div className="logo">
            <i class="material-icons">tv</i> MOVIEs APP
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
          <p>
            La La Land is a 2016 American romantic musical film written and
            directed by Damien Chazelle. It stars Ryan Gosling as a jazz pianist
            and Emma Stone as an aspiring actress, who meet and fall in love
            while pursuing their dreams in Los Angeles. Having been fond of
            musicals during his time as a drummer, Chazelle first conceptualised
            the film alongside Justin Hurwitz while attending Harvard University
            together. Moving to Los Angeles in 2010, Chazelle wrote the
            screenplay but did not find a studio willing to finance the
            production without changes to his design. Following the success of
            his 2014 film Whiplash, the project was picked up by Summit
            Entertainment. Filming took place in Los Angeles from August to
            September 2015, with the film's score composed by Hurwitz and the
            dance choreography by Mandy Moore. La La Land premiered at the 73rd
            Venice International Film Festival on August 31, 2016, and was
            released in the United States on December 9, 2016. It grossed $446
            million worldwide against a production budget of $30 million.
          </p>
        </section>
      </div>
    </div>
  );
}

export default App;
