import React from 'react'
import Skill from './Skill';
import { Box, Grid, Container, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import 'devicon'
import skills from './config/skills';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.dark.main,
    },
    title:{
        color: theme.palette.white.main
    }
}))

export default function SkillsContainer() {
    const classes = useStyles()
    return (
        <Box component="section" textAlign="center" className={classes.root} m={0} px={{ xs: 2, sm: 3, md: 5 }} py={{ xs: 5, sm: 10, md: 15 }} id="skills">
            <Container>
            <Typography className={classes.title} variant="h2" gutterBottom>Skills</Typography>
                <Grid container spacing={6} alignsItems="center" justifyContent="center">
                    {skills.map(skill => (
                        <Skill {...skill} />
                    ))}
                </Grid>
            </Container>
        </Box>
    )
}
