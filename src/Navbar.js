import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-scroll';
import { Box, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'absolute',
        zIndex: '2',
        margin: '0',
        backgroundColor: theme.palette.blue.highlight
    },
}));

export default function Navbar() {
    const classes = useStyles();

    return (
        <Grid container spacing={2} component="nav" className={classes.root} justifyContent="center">
            <Grid item>
                <Link to="about" spy={true} smooth={true}>
                    <Button color="red">About</Button>
                </Link>
            </Grid>

            <Grid item>
                <Link to="projects" spy={true} smooth={true}>
                    <Button color="inherit">Projects</Button>
                </Link >
            </Grid>
            <Grid item>
                <Link to="skills" spy={true} smooth={true}>
                    <Button color="inherit">Skills</Button>
                </Link >
            </Grid>
            <Grid item>
                <Link to="contact" spy={true} smooth={true}>
                    <Button color="inherit">Contact</Button>
                </Link >
            </Grid>
        </Grid >
    );
}
