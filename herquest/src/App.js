import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Start from './StartPage.js';
import Result from './EndPage.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      view: "Start"
    };
    this.updateState = this.updateState.bind(this);
  }

  updateState(state) {
    this.setState(state);
  }


  render() {

      if (this.state.view === "Start") {
        return (
          <Start
            nextPage={this.updateState}
            currentView={this.state.view}
          />
        )
      }
      else {
        return (<Result />)
      }


  }
}

const styles = () => ({

});

export default withStyles(styles)(App);
