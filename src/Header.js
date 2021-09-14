import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core';
import Particles from 'react-particles-js';
import { StylesContext } from '@material-ui/styles';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles(({palette}) => ({
    header: {
        '& #tsparticles': {
            position: 'absolute',
            width: '100vw',
            height: '100vh',
        },
    },
    particles: {
        position: 'absolute',
        width: '100vw',
        height: '100vh',
    },
    content: {
        width: '100vw',
        height: '100vh',
        position: 'absolute',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    socialIcons: {
        paddingTop: '2rem',
        zIndex: '10',
        '& svg': {
            fontSize: '3rem',
            margin: '0 1rem',
            '&:hover': {
                color: palette.primary.main
            }
        },
    },
    highlight1:{
        backgroundColor: palette.primary.faded,
        padding: '5px',
    },
    highlight2:{
        backgroundColor: palette.secondary.faded,
        padding: '5px',
    },
    cursive:{
        fontFamily: ['Allison', 'cursive'],
        fontSize: '9rem'
    }
}))

export default function Header() {
    const classes = useStyles();
    return (
        <header className={classes.header}>
            <div className={classes.content}>
                <Typography variant="h1" background="primary">
                    Hi there! I'm <span className={classes.cursive}>Heather O'Brien</span>
                </Typography>
                <Typography variant="h5">
                    I enjoy coding. Especially with <span className={classes.highlight1}>JavaScript</span> and <span className={classes.highlight2}>React</span>.
                </Typography>
                <div className={classes.socialIcons}>
                    <GitHubIcon />
                    <InstagramIcon />
                    <LinkedInIcon />
                </div>
            </div>
            <Particles className={classes.Particles}
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
                            "value": ["#f64f55", "#ed9479", "#f1e076", "#97d4b9", "#65b8ce", "#ec95ce"]
                        },
                        "shape": {
                            "type": ["polygon"],
                        },
                        "opacity": {
                            "value": 0.7,
                            "random": true,
                            "anim":{
                                "enable": true,
                                "speed": 1,
                                "opacity_min": 0.3
                            },
                        },
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "bubble"
                            },
                            "onclick": {
                                "enable": false,
                                "mode": "push"
                            }
                        },
                        "modes": {
                            "bubble": {
                                "distance": 250,
                                "duration": 2,
                                "size": 0,
                                "opacity": 0.8
                            },
                            "push": {
                                "particles_nb": 10,
                                "particles_nb": 10
                            }
                        }
                    }
                }} />

        </header>
    )
}

