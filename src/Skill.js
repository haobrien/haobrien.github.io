import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { Avatar } from '@material-ui/core';
import 'devicon'
import './styles/Skill.css'

export default function Skill({ name, icon }) {
    return (

        <Grid item>
            <div className="flip-container" ontouchstart="this.classList.toggle('hover');">
                <div className="flipper">
                    <div className="front">
                        <Avatar aria-describedby={name} className="skill">
                            <i className={icon} alt={name}></i>
                        </Avatar>
                    </div>
                    <div className="back">
                        <Avatar aria-describedby={name} className="skill">
                            <Typography>{name}</Typography>
                        </Avatar>
                    </div>
                </div>
            </div>
        </Grid>


    )
}
