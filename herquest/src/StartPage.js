import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AppBar from '@material-ui/core/AppBar';
import Data from "./data.json";
import logo from './assests/hq_logo-01.png';
import MenuIcon from '@material-ui/icons/Menu';

import './App.css';
import CardComponent from './CardComponent';

class Start extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Question1Answer: "",
      Question2Answer: "",
      Question3Answer: ""
    };

    this.onSubmit = this.onSubmit.bind(this);
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
    this.props.nextPage({
      view: "End"
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <div className="Start">

        <AppBar position="static">
          {/* <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Button color="inherit">Login</Button>
            <Button color="inherit">Learn More</Button>
            <Button color="inherit">About Us</Button>
            <Button color="inherit">Rewards</Button>
          </Toolbar> */}
        </AppBar>
        <Grid
          container
          justify="center"
          alignItems="center"
        >
          <img src={logo} alt="Header" className={classes.logo} />
        </Grid>
        { Data.map((data, index) => {
            return (
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
                key={index}
              >
                <CardComponent 
                  id={index}
                  question={data.Question}
                  answers={[data.A, data.B, data.C, data.D]}
                  handleSelection={this.handleSelection}
                  handleStyleButtons={this.handleStyleButtons}
                />
              {/* <Card id={index} className={classes.card}>
                <Grid
                  container
                  direction="column"
                  justify="center"
                  alignItems="center"
                >
                  <Typography className={classes.questionStyle}>
                    {data.Question}
                  </Typography>
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
                      <Typography className={classes.answers}>
                        {data.A}
                      </Typography>
                    </Button>
                    <Button
                      className={classes.styleButton}
                      style={this.handleStyleButtons()}
                      onClick={() => this.handleSelection(index, )}
                    >
                      <Typography className={classes.answers}>
                        {data.B}
                      </Typography>
                    </Button>
                  </Grid>
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
                      <Typography className={classes.answers}>
                        {data.C}
                      </Typography>
                    </Button>
                    <Button
                      className={classes.styleButton}
                      style={this.handleStyleButtons()}
                      onClick={() => this.handleSelection(index, )}
                    >
                      <Typography className={classes.answers}>
                        {data.D}
                      </Typography>
                    </Button>
                  </Grid>
                </Grid>
              </Card> */}
              </Grid>
            )
          }
          )
        }
        <Grid
          container
          justify="center"
          alignItems="center"
        >
          <Button
            className={classes.submitButton}
            onClick={this.onSubmit}
          >
            Submit
          </Button>
        </Grid>

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
    width: '20%',
    height: '10%',
    color: 'white',
    textTransform: 'none',
    fontSize: '150%',
    margin: '5%'
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
  questionStyle: {
    color: '#7f47dd',
    fontSize: '200%',
    textAlign: 'center'
  },
  answers: {
    color: 'white',
    textTransform: 'none',
    fontSize: '100%',
    padding: '4px'
  }
});

export default withStyles(styles)(Start);
