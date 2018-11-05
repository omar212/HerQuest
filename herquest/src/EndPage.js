import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import logo from './assests/hq_logo-01.png';
import SnapCodeAr from './assests/snapcodeAr.png';
import SnapCodeCs from './assests/snapcodeCS.png';
import SnapCodeME from './assests/snapcodeME.png';
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


      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="center"
      >
        <img src={SnapCodeAr} alt="SnapCodeAr" className={classes.snapCode} />
        <img src={SnapCodeCs} alt="SnapCodeCs" className={classes.snapCode} />
        <img src={SnapCodeME} alt="SnapCodeME" className={classes.snapCode} />
      </Grid>

      </div>
    );
  }
}

const styles = () => ({
  logo: {
    width: '25%',
    height: '25%'
  },
  snapCode: {

  }
});

export default withStyles(styles)(Result);
