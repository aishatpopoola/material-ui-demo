/* eslint-disable no-restricted-globals */
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { ThemeProvider, createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: '#1B54EB'
    }
  }
})

function App() {
  
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar />
      </div>
    </ThemeProvider>
    
  );
}

export default App;
