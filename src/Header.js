import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Box, Container } from '@material-ui/core';
import particleConfig from './config/particleConfig';
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
            transition: 'all 200ms ease-in-out',
            color: 'black',
            cursor: 'pointer',
            '&:hover': {
                color: palette.tertiary.main,
                transform: 'scale(1.25)',
            }
        },
    },
    highlight1: {
        backgroundColor: palette.secondary.highlight,
        padding: '5px',
    },
    highlight2: {
        backgroundColor: palette.tertiary.highlight,
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
                    {/* I really enjoy coding. Especially with <span className={classes.highlight1}>Front-End</span> and <span className={classes.highlight2}>React</span>. */}
                    I really enjoy coding. Especially with <span className={classes.highlight1}>Front-End</span> languages and frameworks.
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
            <Particles className={classes.particles} params={particleConfig} />
        </Box>
    )
}

