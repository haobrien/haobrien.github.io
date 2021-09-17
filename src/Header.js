import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core';
import Particles from 'react-particles-js';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Link } from '@material-ui/core'

const useStyles = makeStyles(({ palette }) => ({
    root: {
        display: 'block',
        backgroundColor: 'white',
        width: '100vw',
        height: '100vh',
        '& #tsparticles': {
            position: 'absolute',
            width: '100vw',
            height: '100vh',
        },
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
        paddingTop: '3rem',
        zIndex: '10',
        '& svg': {
            fontSize: '3.5rem',
            margin: '0 1rem',
            transition: 'all 150ms ease-in-out',
            '&:hover': {
                color: palette.orange.main,
                transform: 'scale(1.2)',
                cursor: 'pointer'
            }
        },
        '& a': {
            color: 'black'
        }
    },
    highlight1: {
        backgroundColor: palette.green.highlight,
        padding: '5px',
    },
    highlight2: {
        backgroundColor: palette.red.highlight,
        padding: '5px',
    },
    signature: {
        fontFamily: ['Allison', 'cursive'],
        fontSize: '1.5em'
    }
}))

export default function Header() {
    const classes = useStyles();
    return (
        <header className={classes.root}>
            <div className={classes.content}>
                <Typography variant="h1">
                    Hi there! I'm <span className={classes.signature}>Heather O'Brien</span>
                </Typography>
                <Typography variant="h5">
                    I really enjoy coding. Especially with <span className={classes.highlight1}>JavaScript</span> and <span className={classes.highlight2}>React</span>.
                </Typography>
                <div className={classes.socialIcons}>
                    <Link href="https://github.com/haobrien" target="_blank">
                        <GitHubIcon />
                    </Link>
                    <Link href="https://www.instagram.com/hazelhob/" target="_blank">
                        <InstagramIcon />
                    </Link>
                    <Link href="https://www.linkedin.com/in/haobrientx/" target="_blank">
                        <LinkedInIcon />
                    </Link>
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
                            "anim": {
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

