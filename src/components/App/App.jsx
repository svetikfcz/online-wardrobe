import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import SignIn from '../SignIn';

const theme = createMuiTheme();

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <SignIn />
        </ThemeProvider>
    )
};

export default App;
