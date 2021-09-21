import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Box, Container } from '@material-ui/core';
import Particles from 'react-particles-js';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles(({ palette }) => ({
    root: {
        display: 'flex',
        backgroundColor: 'white',
        height: '100vh',
    },
    particles: {
        width: '100%',
        height: '100%',
        display: 'hidden'
    },
    content: {
        position: 'absolute',
        textAlign: 'center'
    },
    socialIcons: {
        paddingTop: '3rem',
        '& a svg': {
            fontSize: '3.5rem',
            margin: '0 1rem',
            transition: 'all 300ms ease-out',
            color: 'black',
            cursor: 'pointer',
            '&:hover': {
                color: palette.primary.main,
                transform: 'scale(1.26)',
            }
        },
    },
    highlight1: {
        backgroundColor: palette.secondary.main,
        padding: '5px',
    },
    highlight2: {
        backgroundColor: palette.tertiary.main,
        padding: '5px',
    },
}))

export default function Header() {
    const classes = useStyles();
    return (
        <Box component="header" className={classes.root} justifyContent="center" alignItems="center">
            <Container className={classes.content} id="heading" >
                <Typography variant="h1">
                    Hi there! I'm <span className="signature">Heather O'Brien</span>
                </Typography>
                <Typography variant="h5">
                    I really enjoy coding. Especially with <span className={classes.highlight1}>JavaScript</span> and <span className={classes.highlight2}>React</span>.
                </Typography>
                <div className={classes.socialIcons}>
                    <a rel="noreferrer" href="https://github.com/haobrien" target="_blank">
                        <GitHubIcon />
                    </a>
                    <a rel="noreferrer" href="https://www.instagram.com/hazelhob/" target="_blank">
                        <InstagramIcon />
                    </a>
                    <a rel="noreferrer" href="https://www.linkedin.com/in/haobrientx/" target="_blank">
                        <LinkedInIcon />
                    </a>
                </div>
            </Container>
            <Particles className={classes.particles}
                params={{
                    "particles": {
                        "number": {
                            "value": 100,
                            "density": {
                                "enable": false
                            }
                        },
                        "size": {
                            "value": 5,
                            "random": true,
                            "anim": {
                                "speed": 4,
                                "size_min": 0.3
                            }
                        },
                        "line_linked": {
                            "enable": false
                        },
                        "move": {
                            "random": true,
                            "speed": 1,
                            "direction": "none",
                            "out_mode": "bounce",
                            "bounce": true,
                            "attract": true
                        },
                        "color": {
                            "value": ["#2ec4b6", "#ff9f1c", "#e71d36"]
                            // "value": ["#f64f55", "#ed9479", "#f1e076", "#97d4b9", "#65b8ce", "#ec95ce"]
                        },
                        "shape": {
                            "type": ["polygon"],
                        },
                        "opacity": {
                            "value": 0.7,
                            "random": true,
                            "anim": {
                                "enable": true,
                                "speed": 1,
                                "opacity_min": 0.3
                            },
                        },
                    },
                }} />

            {/* </header> */}
            {/* </Container> */}
        </Box>
    )
}

