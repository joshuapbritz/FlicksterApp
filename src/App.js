import React from 'react';
import Home from './pages/home/Home';
import Detail from './pages/detail/Details';

import { Route, BrowserRouter as Router, Link } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <nav className="Nav">
          <div className="inner">
            <div className="logo">
              <i className="material-icons">tv</i>
              <Link to="/">Flickster</Link>
            </div>

            <div className="menu">
              <i className="material-icons">change_history</i>
            </div>
          </div>
        </nav>

        <main className="main-wrapper">
          <Route exact path="/" component={Home} />
          <Route path="/title/:name" component={Detail} />
        </main>

        <footer className="Footer">
          <div className="inner">&copy; Flickster App 2019</div>
        </footer>
      </Router>
    </div>
  );
}

export default App;
