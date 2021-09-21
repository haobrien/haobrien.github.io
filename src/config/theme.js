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
            main: '#ffa69e',
            highlight: 'rgba(255, 166, 158,0.5)'
        },
        secondary: {
            main: '#aed9e0',
            highlight: 'rgba(174, 217, 224,0.5)'
        },
        tertiary: {
            main: '#75E6CF',
            highlight: 'rgba(117, 230, 207, 0.5)',
        },
    },
});

export default theme