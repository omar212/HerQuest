import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Data from "./data.json";
import Result from "./EndPage.js";
import AppBar from '@material-ui/core/AppBar';
import logo from './hq_logo-01.png';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Question1Answer: "",
      Question2Answer: "",
      Question3Answer: ""
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
    return ( <Result /> )
  }

  render() {
    const { classes } = this.props;

    return (
      <div className="App">


      <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
          <Button color="inherit">Learn More About Us</Button>
          <Button color="inherit">Rewards</Button>
        </Toolbar>
      </AppBar>
<img src={logo} alt="Header" className={classes.logo} />
        { Data.map((data, index) => {
            return (
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
              >
              <Card id={index} className={classes.card}>
              <div id={index}>
              {console.log(data.A)}
                <Typography className={classes.questionColor}>
                  {data.Question}
                </Typography>
                <Grid
                  container
                  direction="column"
                  justify="center"
                  alignItems="center"
                >
                  <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                  >
                    <Button
                      className={classes.styleButton}
                      style={this.handleStyleButtons()}
                      onClick={() => this.handleSelection(index, )}
                    >
                      {data.A}
                    </Button>
                    <Button>
                      {data.B}
                    </Button>
                  </Grid>
                  <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                  >
                    <Button>
                      {data.C}
                    </Button>
                    <Button>
                      {data.D}
                    </Button>
                  </Grid>
                </Grid>
              </div>
              </Card>
              </Grid>
            )
          }
          )
        }

        <Button
          className={classes.submitButton}
          onClick={this.onSubmit}
        >
          Submit
        </Button>

      </div>
    );
  }
}

const styles = () => ({
  logo: {
    width: '30%',
    height: '30%'
  },
  card: {
    border: '3px solid black',
    borderRadius: '5px',
    width: '80%',
    marginBottom: '5%'
  },
  styleButton: {
    width: '10%',
    height: '10%',
    color: 'white',
    textTransform: 'none',
    fontSize: '150%'
  },
  submitButton: {
    backgroundColor: '#8cd4e4',
    width: '10%',
    height: '10%',
    color: 'white',
    textTransform: 'none',
    fontSize: '150%',
    marginBottom: '4%'
  },
  styleSelect: {
    backgroundColor: '#8cd4e4'
  },
  questionColor: {
    color: '#7f47dd',
    fontSize: '200%'
  }
});

export default withStyles(styles)(App);
