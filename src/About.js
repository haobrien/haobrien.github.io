import React from 'react'
import FadeInSection from './FadeInSection';
import { Box, Grid, Typography, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import PetsIcon from '@material-ui/icons/Pets';
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset';
import LocalFloristIcon from '@material-ui/icons/LocalFlorist';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import CakeIcon from '@material-ui/icons/Cake';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.light.main
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
        color: theme.palette.primary.main
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
                        <Typography paragraph className={classes.content}>Hello there! My name is Heather, and I'm a lifelong lover of web development and design.  </Typography>
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
                                        <ListItemText primary="Cooking & Baking" />
                                    </ListItem>
                                </FadeInSection>
                                <FadeInSection direction="left">
                                    <ListItem>
                                        <ListItemIcon>
                                            <Box className={classes.iconBox}>
                                                <VideogameAssetIcon />
                                            </Box>
                                        </ListItemIcon>
                                        <ListItemText primary="Gaming"/>
                                    </ListItem>
                                </FadeInSection>
                                <FadeInSection direction="left">
                                    <ListItem>
                                        <ListItemIcon>
                                            <Box className={classes.iconBox}>
                                                <LocalFloristIcon />
                                            </Box>
                                        </ListItemIcon>
                                        <ListItemText primary="Home Improvement" />
                                    </ListItem>
                                </FadeInSection>
                                <FadeInSection direction="left">
                                    <ListItem>
                                        <ListItemIcon>
                                            <Box className={classes.iconBox}>
                                                <MenuBookIcon />
                                            </Box>
                                        </ListItemIcon>
                                        <ListItemText primary="Reading" />
                                    </ListItem>
                                </FadeInSection>
                                <FadeInSection direction="left">
                                    <ListItem>
                                        <ListItemIcon>
                                            <Box className={classes.iconBox}>
                                                <PetsIcon />
                                            </Box>
                                        </ListItemIcon>
                                        <ListItemText primary="Playing with my giant dogs" />
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
