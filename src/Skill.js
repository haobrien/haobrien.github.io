import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import 'devicon'
import './styles/Skill.css'

const useStyles = makeStyles(theme => ({
    flipper: {
        boxShadow: theme.shadows[3],
    },
    icon: {
        color: theme.palette.dark.main,
    },
    back: {
        '& div': {
            backgroundColor: theme.palette.dark.main
        }
    }
}))
export default function Skill({ name, icon }) {
    const classes = useStyles()
    return (
        <Grid item>
            <div className="flip-container" ontouchstart="this.classList.toggle('hover');">
                <div className={`flipper`}>
                    <div className="front">
                        <Avatar aria-describedby={name} className={`skill ${classes.flipper}`}>
                            <i className={`${icon} ${classes.icon}`} alt={name}></i>
                        </Avatar>
                    </div>
                    <div className={`back ${classes.back}`}>
                        <Avatar aria-describedby={name} className={`skill ${classes.flipper}`}>
                            <Typography>{name}</Typography>
                        </Avatar>
                    </div>
                </div>
            </div>
        </Grid>


    )
}
