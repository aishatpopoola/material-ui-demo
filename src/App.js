/* eslint-disable no-restricted-globals */
import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import {
  ThemeProvider,
  createTheme,
  makeStyles,
} from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import ChangePasswordModal from "./components/ChangePasswordModal";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const changeTheme = (theme) => {
  let mainPrimaryColor = "#1B54EB";

  if (theme === "grey-scale") {
    mainPrimaryColor = "#12122B";
  }

  return createTheme({
    palette: {
      primary: {
        main: mainPrimaryColor,
      },
    },
    overrides: {
      MuiTab: {
        root: {
          '&:hover': {
            backgroundColor: mainPrimaryColor,
          }
        }
      }
    }
  });
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  tabButton: {
    minHeight: 51,
    width: '100%',
    '&:hover': {
      color: '#fff'
    }
  }
}));

function App() {
  const [themeValue, setThemeValue] = React.useState("default");
  const handleRadioChange = (event) => {
    setThemeValue(event.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(themeValue);
  };

  const classes = useStyles()
  const [tabValue, setTabValue] = React.useState(0);

  const handleTabChange = (e, newValue) => {
    setTabValue(newValue);
  };
  return (
    <ThemeProvider theme={changeTheme(themeValue)}>
      <div className="App">
        <Navbar />
        <div className="page-wrapper">
          <div className="container mx-auto">
            {/* ============================================= */}
            <div className={classes.root}>
              <AppBar position="static" color="default" className="tabsHeader">
                <Tabs
                  value={tabValue}
                  onChange={handleTabChange}
                  indicatorColor="primary"
                  textColor="primary"
                  variant="scrollable"
                  scrollButtons="auto"
                  aria-label="scrollable auto tabs example"
                >
                  <Tab label="User" className={classes.tabButton} {...a11yProps(0)} />
                  <Tab label="Account" className={classes.tabButton} {...a11yProps(1)} />
                  <Tab label="Communications" className={classes.tabButton} {...a11yProps(2)} />
                </Tabs>
              </AppBar>
              <TabPanel value={tabValue} index={0}>
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
            <ChangePasswordModal />
              </TabPanel>
              <TabPanel value={tabValue} index={1}>
                Account Page
              </TabPanel>
              <TabPanel value={tabValue} index={2}>
                Communications Page
              </TabPanel>
            </div>
            {/* ============================================= */}
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
