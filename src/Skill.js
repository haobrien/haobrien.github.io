import React from 'react'
import { Box, Grid, Popover, Typography, Paper, Container, Chip } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { Avatar } from '@material-ui/core';
import 'devicon'
import './styles/Skill.css'

const useStyles = makeStyles(theme => ({
    skill: {
        transition: 'all 300ms ease-in-out',
        padding: '1.5rem',
        fontWeisght: 'bold',
        background: 'white',
        cursor: 'pointer',
        fontSize: '2.5rem',
        color: '#333',
        // '&:hover': {
        //     color: theme.palette.orange.main,
        //     transform: 'scale(1.2)'
        // }
    }
}))



export default function Skill({ name, icon }) {
    const classes = useStyles()

    return (

        <Grid item>
            <div className="flip-container" ontouchstart="this.classList.toggle('hover');">
                <div className="flipper">
                    <div className="front">
                        <Avatar aria-describedby={name} className={classes.skill}>
                            <i className={icon} alt={name}></i>
                        </Avatar>
                    </div>
                    <div className="back">
                        <Avatar aria-describedby={name} className={classes.skill}style={{backgroundColor: 'orange', color: 'white', fontWeight: 'bold', textTransform: 'uppercase'}}>
                            <Typography>{name}</Typography>
                        </Avatar>
                    </div>
                </div>
            </div>
        </Grid>


    )
}
