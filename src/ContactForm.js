// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from 'react';
import { useForm } from '@formspree/react';
import { TextField, Typography, Container, Box, Paper, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: 'transparent'
    },
    paper: {
        padding: '3rem',
    },
    input: {
        margin: '0.5rem 0'
    }
}))


export default function ContactForm() {
    const classes = useStyles()
    const [state, handleSubmit] = useForm("mleazjgp");
    if (state.succeeded) {
        return (
            <Box component="section" textAlign="center" className={classes.root} m={0} px={{ xs: 2, sm: 3, md: 5 }} py={{ xs: 5, sm: 10, md: 15 }} id="contact">
                <Container>
                    <Typography variant="h2" gutterBottom>Contact</Typography>
                    <Paper square elevation={3} className={classes.paper}>
                        <Typography paragraph>
                            <p>Thank you - your message has been sent!</p>
                        </Typography>
                    </Paper>
                </Container>
            </Box>
        )
    }

    return (
        <Box component="section" textAlign="center" className={classes.root} m={0} px={{ xs: 2, sm: 3, md: 5 }} py={{ xs: 5, sm: 10, md: 15 }} id="contact">

            <Container>
                <Typography variant="h2" gutterBottom>Contact</Typography>
                    <Paper square elevation={3} className={classes.paper}>
                        <form onSubmit={handleSubmit} autoComplete="off">
                            <TextField className={classes.input}
                                fullWidth
                                id="name"
                                name="name"
                                type="name"
                                label="Name"
                                variant="outlined"
                                required
                            />
                            <TextField className={classes.input}
                                fullWidth
                                id="email"
                                name="email"
                                type="email"
                                label="Email"
                                variant="outlined"
                                required
                            />
                            <TextField className={classes.input}
                                fullWidth
                                multiline
                                minRows={4}
                                id="message"
                                name="message"
                                type="text"
                                label="Message"
                                variant="outlined"
                                required
                            />
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                className={classes.button}
                                disabled={state.submitting}
                                endIcon={<SendIcon />}
                            >
                                Send
                            </Button>
                        </form>
                    </Paper>
            </Container>
        </Box>
    );
}