import React, { Component } from 'react';

import Button from '../../components/button/Button';
import InfoContent from '../../components/info-content/InfoContent';
import SimilarTitles from '../../components/similar-titles/SimilarTitles';

import Ratings from '../../components/ratings/Ratings';

import { Api } from '../../services/api';

import './Details.css';

class Detail extends Component {
  state = {
    data: null,
  };

  async componentDidMount() {
    const { name } = this.props.match.params;
    Api.getTitle(name).then(data => this.setState({ data }));
  }

  render() {
    window.scrollTo(0, 0);
    if (!this.state.data) {
      return (
        <div className="Detail">
          <h1>Loading</h1>
        </div>
      );
    } else {
      return (
        <div className="Detail">
          <div className="inner-wrapper">
            <figure className="home">
              <img src={this.state.data.poster} alt="poster" />
            </figure>

            <article>
              <div className="title">
                <h1>
                  {this.state.data.title} ({this.state.data.year})
                </h1>
                <span className="genre">
                  {this.state.data.genres.join(' | ')}
                </span>
                <Ratings rating={this.state.data.rating} />
                <div className="info">
                  <table>
                    <tbody>
                      <tr>
                        <td>
                          <strong>Director:</strong>
                        </td>
                        <td>{this.state.data.director.join(', ')}</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Writer(s):</strong>
                        </td>
                        <td>{this.state.data.writers.join(', ')}</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Actors:</strong>
                        </td>
                        <td>{this.state.data.actors.join(', ')}</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Producers:</strong>
                        </td>
                        <td>{this.state.data.producers.join(', ')}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="actions">
                <Button
                  outlined={false}
                  icon="shopping_basket"
                  label={`RENT NOW (R${this.state.data.rentPrice}.00)`}
                />
                <Button
                  outlined={true}
                  icon="credit_card"
                  label={`BUY NOW (R${this.state.data.purchasePrice}.00)`}
                />
              </div>
            </article>

            <section>
              <h4>Description</h4>
              <InfoContent content={this.state.data.description} />
              <br />
              <SimilarTitles />
            </section>
          </div>
        </div>
      );
    }
  }
}

export default Detail;
