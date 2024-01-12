import logo from './logo.svg';
import './App.css';
import React from "react";
import {
  Route,
  Routes,
  BrowserRouter as Router,
} from "react-router-dom";
import PageNotFound from "./404Page";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.js</code> and save to reload. 123
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </header>
          </div>
        } />
        <Route
          path="*"
          element={

                <PageNotFound />

          }
        />
      </Routes>
    </Router>

  );
}

export default App;
