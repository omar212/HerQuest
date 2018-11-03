import React, { Component } from 'react';
import { BrowserRouter,Route } from 'react-router-dom';
import App from './App.js';
import Result from './EndPage.js';


class Main extends Component {
  render() {
      return (
        <BrowserRouter>
        <div className = "App">
          <Route path = "/" component = {App} />
          <Route path = "/Snap" component = {Result} />
        </div>
        </BrowserRouter>
    );
  }
}

export default Main;
