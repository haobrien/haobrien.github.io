import React from 'react'
import {Box, Container} from '@material-ui/core'
import FavoriteIcon from '@material-ui/icons/Favorite';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'absolute',
        width: '100%',
        zIndex: '2',
        backgroundColor: theme.palette.dark.main,
        color: 'white',
        '& a':{
            color: 'white'
        }
    },
    heart: {
        marginBottom: '-6px',
        color: theme.palette.primary.main
    }
}));

export default function Footer() {
    const classes = useStyles();
    return (
        <Box className={classes.root} component="footer" justifyContent="center" textAlign="center" alignItems="center">
            <Container>
                <p>Made with <FavoriteIcon className={classes.heart}/> by <a href="http://github.com/haobrien" target="_blank" rel="noreferrer">Heather OBrien</a></p>
            </Container>
        </Box>
    )
}
