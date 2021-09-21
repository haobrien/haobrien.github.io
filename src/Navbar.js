import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-scroll';
import { Grid, Container, Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'absolute',
        zIndex: '2',
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.white.main,
        width: '100%',
    },
}));

export default function Navbar() {
    const classes = useStyles();

    return (
        <Box component="nav" className={classes.root} py={1} id="nav">
            <Container>
                <Grid container component="nav" justifyContent="space-around">
                    <Grid item>
                        <Link to="about" spy={true} smooth={true}>
                            <Button color="inherit">About</Button>
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
            </Container>
        </Box >
    );
}
