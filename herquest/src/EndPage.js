import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Data from "./data.json";
import logo from './hq_logo-01.png';
import SnapCodeAr from './snapcodeAr.png';
import SnapCodeCs from './snapcodeCS.png';
import SnapCodeME from './snapcodeME.png';
import './App.css';

class Result extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };

  }

  handleStyleButtons() {
    if (false) {
      return { backgroundColor: 'blue' };
    }
    else {
      return { backgroundColor: '#8cd4e4' };
    }
  }

  handleSelection(index) {
    this.setState({

    });
  }

  onSubmit() {

  }

  render() {
    const { classes } = this.props;

    return (
      <div className="App">
      <img src={logo} alt="Header" className={classes.logo} />



        <img src={SnapCodeAr} alt="SnapCodeAr" className={classes.SnapCode} />
        <img src={SnapCodeCs} alt="SnapCodeCs" className={classes.SnapCode} />
        <img src={SnapCodeME} alt="SnapCodeME" className={classes.SnapCode} />

      </div>
    );
  }
}

const styles = () => ({
  logo: {
    width: '30%',
    height: '30%'
  }
});

export default withStyles(styles)(Result);
