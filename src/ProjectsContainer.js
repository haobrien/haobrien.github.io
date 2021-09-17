import React from 'react'
import ProjectCard from './ProjectCard'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core';
import { Grid, Box, Container } from '@material-ui/core';


const useStyles = makeStyles(({ palette }) => ({
    root: {
        background: 'white',
    }
}))

const projects = [
    {
        name: 'Color Palette App',
        description: 'Browse predefined color palettes, or create your own! Click to copy your color code for use in your own projects. Created with React.js.',
        img: 'https://images.unsplash.com/photo-1500042600524-37ecb686c775?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1100&q=80',
        demoUrl: 'https://haobrien.github.io/color-palette-app/',
        repoUrl: 'https://github.com/haobrien/color-palette-app',
        skills: ['React', 'JavaScript', 'HTML', 'CSS', 'Material UI', 'Responsive']
    },
    {
        name: 'YelpCamp',
        description: 'Yelp-style website for posting and rating campsites. Register your own account, or use username & password demo for login.',
        img: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
        demoUrl: 'https://cryptic-sea-93579.herokuapp.com/',
        repoUrl: 'https://github.com/haobrien/yelp-camp-v2',
        skills: ['JavaScript', 'ExpressJS', 'MongoDB', 'NodeJS', 'EJS', 'Responsive']
    },
    {
        name: 'Lights Out',
        description: 'A virtual recreation of the 90s classic, Lights Out! Turn out all the lights to win.',
        img: 'https://images.unsplash.com/photo-1535868463750-c78d9543614f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
        demoUrl: 'https://haobrien.github.io/lights-out/',
        repoUrl: 'https://github.com/haobrien/lights-out',
        skills: ['React', 'JavaScript', 'HTML', 'CSS']
    },
    {
        name: 'Deck of Cards',
        description: 'A virtual whole deck of cards. Draw one card at a time. After all 52 cards have been drawn, you can receive a new shuffled deck. Mobile friendly.',
        img: 'https://images.unsplash.com/photo-1501003878151-d3cb87799705?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
        demoUrl: 'https://haobrien.github.io/deck-of-cards/',
        repoUrl: 'https://github.com/haobrien/deck-of-cards',
        skills: ['React', 'JavaScript', 'HTML', 'CSS', 'Mobile Friendly']
    },
    {
        name: 'Deck of Cards',
        description: 'A virtual whole deck of cards. Draw one card at a time. After all 52 cards have been drawn, you can receive a new shuffled deck. Mobile friendly.',
        img: 'https://images.unsplash.com/photo-1501003878151-d3cb87799705?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
        demoUrl: 'https://haobrien.github.io/deck-of-cards/',
        repoUrl: 'https://github.com/haobrien/deck-of-cards',
        skills: ['React', 'JavaScript', 'HTML', 'CSS', 'Mobile Friendly']
    },
]


export default function ProjectsContainer() {
    const classes = useStyles()
    return (
        <Box component="section" textAlign="center" className={classes.root} m={0} px={{ xs: 2, sm: 3, md: 5 }} py={{ xs: 5, sm: 10, md: 15 }} id="projects">
            <Container>
                <Typography variant="h2" align="center" gutterBottom>Projects</Typography>
                <Grid container spacing="8" justifyContent="center">
                    {projects.map(project => (
                        <Grid item sm="6" md="4">
                            <ProjectCard {...project} />
                        </Grid>
                    )
                    )}
                </Grid>
            </Container>
        </Box>
    )
}
