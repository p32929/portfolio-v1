import React, {Component} from 'react';
import './App.css';
import ClippedDrawer from "./components/ClippedDrawer";
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core';

const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
        fontFamily: 'Muli',
    },
});


class App extends Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <ClippedDrawer/>
            </MuiThemeProvider>
        );
    }
}

export default App;
