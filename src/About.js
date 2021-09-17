import React from 'react'
import { Box, Grid, Typography, Paper, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Avatar from '@material-ui/core/Avatar';
import PetsIcon from '@material-ui/icons/Pets';
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset';
import LocalFloristIcon from '@material-ui/icons/LocalFlorist';
import MenuBookIcon from '@material-ui/icons/MenuBook';

const useStyles = makeStyles(theme => ({
    root: {
        // borderTop: '3rem solid ' + theme.palette.blue.main,
        // borderBottom: '3rem solid ' + theme.palette.blue.main,
        backgroundColor: 'whitesmoke'
        // color: 'white'
    },
    avatar: {
        maxWidth: '100%',
    },
    content: {
        lineHeight: '2rem'
    },
    heading:{
        textAlign: 'center',
    }
}))

export default function About() {
    const classes = useStyles()
    return (
        <Box component="section" className={classes.root} m={0} px={{ xs: 2, sm: 3, md: 5 }} py={{ xs: 5, sm: 10, md: 15 }} id="about">
            <Container>
                <Typography variant="h2" className={classes.heading}gutterBottom>About Me</Typography>
                <Grid container spacing={3} alignItems="center" justifyContent="center">
                    <Grid item sm>
                        <Box justifyContent="center" display="flex">
                            <img className={classes.avatar} src="/avatar.png" />
                        </Box>
                    </Grid>
                    <Grid item sm>
                        <Typography paragraph className={classes.content}>I’m a 2013 graduate of the University of North Texas with a B.S. in Computer Science. I strive to create valuable user experiences through technical writing and web design.</Typography>
                        <Typography paragraph className={classes.content}>When I'm not coding, I enjoy doing some other things! Like...</Typography>

                        <Grid container justify="left">
                            <List>

                                <ListItem>
                                    <ListItemIcon>
                                        <Box color="red.main">
                                            <PetsIcon />
                                        </Box>
                                    </ListItemIcon>
                                    <ListItemText primary="Fostering Great Pyrenees" secondary="Our home is always covered in fur" />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <Box color="green.main">
                                            <VideogameAssetIcon />
                                        </Box>
                                    </ListItemIcon>
                                    <ListItemText primary="Gaming" secondary="I especially love the classics" />
                                    {/* TODO: ADD TRIFORCE */}
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <Box color="pink.main">
                                            <LocalFloristIcon />
                                        </Box>
                                    </ListItemIcon>
                                    <ListItemText primary="Gardening & Landscaping" secondary="Stereotypical plant mom" />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <Box color="blue.main">
                                            <MenuBookIcon />
                                        </Box>
                                    </ListItemIcon>
                                    <ListItemText primary="Reading" secondary="Currently reading the Wheel of Time" />
                                </ListItem>
                            </List>
                        </Grid>

                    </Grid>
                </Grid>
            </Container>

        </Box>
    )
}
