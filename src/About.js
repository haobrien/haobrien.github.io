import React from 'react'
import { Box, Grid, Typography, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import FadeInSection from './FadeInSection';
import PetsIcon from '@material-ui/icons/Pets';
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset';
import LocalFloristIcon from '@material-ui/icons/LocalFlorist';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import CakeIcon from '@material-ui/icons/Cake';

const useStyles = makeStyles(theme => ({
    root: {
        // borderTop: '3rem solid ' + theme.palette.blue.main,
        // borderBottom: '3rem solid ' + theme.palette.blue.main,
        backgroundColor: theme.palette.light.main
        // color: 'white'
    },
    avatar: {
        maxWidth: '100%',
    },
    content: {
        lineHeight: '2rem'
    },
    heading: {
        textAlign: 'center',
    },
    iconBox: {
        color: theme.palette.secondary.main
    }
}))

export default function About() {
    const classes = useStyles()
    return (
        <Box component="section" className={classes.root} m={0} px={{ xs: 2, sm: 3, md: 5 }} py={{ xs: 5, sm: 10, md: 15 }} id="about">
            <Container>
                <Typography variant="h2" className={classes.heading} gutterBottom>About Me</Typography>
                <Grid container spacing={3} alignItems="center" justifyContent="center">
                    <Grid item sm>
                        <Box justifyContent="center" display="flex">
                            <img alt="avatar" className={classes.avatar} src="/avatar.png" />
                        </Box>
                    </Grid>
                    <Grid item sm>
                        <Typography paragraph className={classes.content}>Well hello there! My name is Heather, and I'm a lifelong lover of web development and design.  </Typography>
                        <Typography paragraph className={classes.content}>I proudly grauated from the University of North Texas with B.S. in Computer Science, and focus using my knowledge to create great user experiences.</Typography>
                        <Typography paragraph className={classes.content}>When I'm not coding, I enjoy doing some other things: </Typography>

                        <Grid container justify="left">
                            <List>

                                <FadeInSection direction="left">
                                    <ListItem>
                                        <ListItemIcon>
                                            <Box className={classes.iconBox}>
                                                <CakeIcon />
                                            </Box>
                                        </ListItemIcon>
                                        <ListItemText primary="Cooking & Baking" secondary="I'll take any excuse to bake a cake" />
                                    </ListItem>
                                </FadeInSection>
                                <FadeInSection direction="left">
                                    <ListItem>
                                        <ListItemIcon>
                                            <Box className={classes.iconBox}>
                                                <VideogameAssetIcon />
                                            </Box>
                                        </ListItemIcon>
                                        <ListItemText primary="Gaming" secondary="Especially the classics and VR" />
                                    </ListItem>
                                </FadeInSection>
                                <FadeInSection direction="left">
                                    <ListItem>
                                        <ListItemIcon>
                                            <Box className={classes.iconBox}>
                                                <LocalFloristIcon />
                                            </Box>
                                        </ListItemIcon>
                                        <ListItemText primary="Gardening & Landscaping" secondary="All plants - indoors & out" />
                                    </ListItem>
                                </FadeInSection>
                                <FadeInSection direction="left">
                                    <ListItem>
                                        <ListItemIcon>
                                            <Box className={classes.iconBox}>
                                                <MenuBookIcon />
                                            </Box>
                                        </ListItemIcon>
                                        <ListItemText primary="Reading" secondary="Currently working through the Wheel of Time" />
                                    </ListItem>
                                </FadeInSection>
                                <FadeInSection direction="left">
                                    <ListItem>
                                        <ListItemIcon>
                                            <Box className={classes.iconBox}>
                                                <PetsIcon />
                                            </Box>
                                        </ListItemIcon>
                                        <ListItemText primary="Fostering Great Pyrenees" secondary="Yes - the vacuuming is never-ending" />
                                    </ListItem>
                                </FadeInSection>

                            </List>
                        </Grid>

                    </Grid>
                </Grid>
            </Container>

        </Box >
    )
}
