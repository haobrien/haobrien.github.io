import React from 'react'
import ProjectCard from './ProjectCard'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core';
import { Grid, Box, Container } from '@material-ui/core';
import projects from './config/projects';

const useStyles = makeStyles(({ palette }) => ({
    root: {
        background: palette.light.main
    }
}))

export default function ProjectsContainer() {
    const classes = useStyles()
    return (
        <Box component="section" textAlign="center" className={classes.root} m={0} px={{ xs: 2, sm: 3, md: 5 }} py={{ xs: 5, sm: 10, md: 15 }} id="projects">
            <Container>
                <Typography variant="h2" align="center" gutterBottom>Projects</Typography>
                <Grid container spacing="6" justifyContent="center">
                    {projects.map(project => (
                        <Grid item sm="6" md="4">
                            <ProjectCard {...project} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    )
}
