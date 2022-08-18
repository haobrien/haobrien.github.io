import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
    typography: {
        h1: {
            fontFamily: ['Oswald', 'sans-serif'],
        },
        h2: {
            fontFamily: ['Oswald', 'sans-serif'],
        },
    },
    overrides: {
        MuiTypography: {
            gutterBottom: {
                marginBottom: '3rem'
            }
        }
    },
    palette: {
        white: {
            main: '#f8f8f8'
        },
        light: {
            main: '#f8f8f8',
            highlight: 'rgba(246,79,85,0.5)'
        },
        dark: {
            main: '#5e6472',
            highlight: 'rgba(101,184,206,0.5)'
        },
        primary: {
            main: '#eb8773',
            highlight: 'rgba(255, 166, 158,0.5)'
        },
        secondary: {
            main: '#a0d5de',
            highlight: 'rgba(174, 217, 224,0.5)'
        },
        tertiary: {
            main: '#67c9b5',
            highlight: 'rgba(117, 230, 207, 0.5)',
        },
    },
});

export default theme