/* eslint-disable no-restricted-globals */
import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

const changeTheme = (theme) => {
  let mainPrimaryColor = '#1B54EB';

  if (theme === 'grey-scale') {
    mainPrimaryColor = '#12122B';
  }

  return createTheme({ 
    palette: {
      primary: {
        main: mainPrimaryColor,
      },
    },
  })
}

function App() {
  const [themeValue, setThemeValue] = React.useState('');
  const handleRadioChange = (event) => {
    setThemeValue(event.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(themeValue)
  };
  return (
    <ThemeProvider theme={changeTheme(themeValue)}>
      <div className="App">
        <Navbar />
        <div className="page-wrapper">
          <div className="container mx-auto">
            <form onSubmit={handleSubmit}>
              <FormControl component="fieldset" className="mx-auto my-auto">
                <FormLabel component="legend">Choose Theme</FormLabel>
                <RadioGroup
                  row
                  aria-label="position"
                  name="theme"
                  value={themeValue}
                  onChange={handleRadioChange}
                >
                  <FormControlLabel
                    value="default"
                    control={<Radio color="primary" />}
                    label="Default"
                  />
                  <FormControlLabel
                    value="grey-scale"
                    control={<Radio color="primary" />}
                    label="Grey-scale"
                  />
                </RadioGroup>
              </FormControl>
            </form>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
