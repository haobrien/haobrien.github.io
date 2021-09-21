import React from 'react';
import FadeInSection from './FadeInSection'
import { makeStyles } from '@material-ui/core/styles';
import { Divider, Box, Chip } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import PersonalVideoIcon from '@material-ui/icons/PersonalVideo';

const useStyles = makeStyles(theme => ({
    root: {
        textAlign: 'center',
    },
    button: {
        fontWeight: 'bold',
        backgroundColor: theme.palette.dark.main,
        color: theme.palette.white.main,
        '&:first-of-type': {
            backgroundColor: theme.palette.secondary.main,
        },
        '&:hover': {
            backgroundColor: theme.palette.tertiary.main,
        }
    },
    skillsBox: {
        margin: '1rem 0'
    },
    chip: {
        borderColor: theme.palette.primary.main,
        color: theme.palette.primary.main,
        margin: '0.1rem'
    }
}))

export default function ProjectCard({ name, description, img, demoUrl, repoUrl, skills }) {
    const classes = useStyles();
    return (
        <FadeInSection direction="up">
            <Card className={classes.root} elevation={3}>
                <CardMedia
                    component="img"
                    height="250"
                    alt={name}
                    image={img}
                    title={name}
                />
                <Divider variant="fullWidth" />
                <CardContent>
                    <Typography variant="h5" component="h2">
                        {name}
                    </Typography>
                    <Box className={classes.skillsBox}>
                        {skills.map(name => (
                            <Chip
                                className={classes.chip}
                                label={name}
                                variant="outlined"/>
                        ))}
                    </Box>
                    <Typography variant="body2" component="p">
                        {description}
                    </Typography>
                </CardContent>
                <Divider variant="middle" />
                <CardActions style={{ justifyContent: 'center' }}>
                    <Button
                        fullWidth
                        href={repoUrl}
                        target="_blank"
                        variant="contained"
                        className={classes.button}
                        startIcon={<GitHubIcon />}
                    >
                        Code
                    </Button>
                    {demoUrl && (<Button
                        fullWidth
                        href={demoUrl}
                        target="_blank"
                        variant="contained"
                        className={classes.button}
                        startIcon={<PersonalVideoIcon />}
                    >
                        Demo
                    </Button>)}
                </CardActions>
            </Card>
        </FadeInSection>
    );
}
