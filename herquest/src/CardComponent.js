// create a functional card component that takes in props and renders the card
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import './App.css';


export const CardComponent = (props) => {

    const { classes } = props;
    
    return (
        <div className="CardComponent">
        <Card className={classes.card}>
            <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            >
            <Typography className={classes.questionStyle}>
                {props.question}
            </Typography>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                {props.answers.map((answer, index) => {
                return (
                    <Button
                    className={classes.styleButton}
                    style={props.handleStyleButtons()}
                    onClick={() => props.handleSelection(props.id, index)}
                    >
                    <Typography className={classes.answers}>
                        {answer}
                    </Typography>
                    </Button>
                )})}
            </Grid>
            </Grid>
        </Card>
        </div>
    );
    }

export default CardComponent;