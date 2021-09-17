import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { Divider, Paper, Box, Chip } from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import PersonalVideoIcon from '@material-ui/icons/PersonalVideo';
import { useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        textAlign: 'center'
    },
    button: {
        fontWeight: 'bold',
        backgroundColor: theme.palette.red.main,
        color: 'white',
        '&:first-of-type': {
            backgroundColor: theme.palette.blue.main,
        }
    },
    skillsBox:{
        margin: '1rem 0'
    },
    chip: {
        backgroundColor: theme.palette.orange.main,
        color: 'white',
        margin: '0.1rem'
    }
}))

export default function ProjectCard({ name, description, img, demoUrl, repoUrl, skills }) {
    const classes = useStyles();

    return (
        <Card className={classes.root} elevation={3} square>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt={name}
                    image={img}
                    title={name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {name}
                    </Typography>
                    <Box className={classes.skillsBox}>
                        {skills.map(name => (
                            <Chip
                                className={classes.chip}
                                label={name} />
                        ))}
                    </Box>
                    <Typography variant="body2" component="p">
                        {description}
                    </Typography>
                </CardContent>
                <Divider variant="middle" />
            </CardActionArea>
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
                <Button
                    fullWidth
                    href={demoUrl}
                    target="_blank"
                    variant="contained"
                    className={classes.button}
                    startIcon={<PersonalVideoIcon />}
                >
                    Demo
                </Button>
            </CardActions>
        </Card>
    );
}
