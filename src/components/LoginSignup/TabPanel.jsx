
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Userlogin from './UserSignUp';
import TextField from '@material-ui/core/TextField';
import FormLabel from '@material-ui/core/FormLabel';
import AccountCircleSharpIcon from '@material-ui/icons/AccountCircleSharp';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Login" {...a11yProps(1)} />
          <Tab label="SignUp" {...a11yProps(2)} />
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
        {/* Item Two  Content data require here */}   
              <AccountCircleSharpIcon style={{
                  height:"70px",
                  width:"100px",
                  marginLeft:"200px"
              }}/><br/><br/>     
              <FormLabel component="legend">Email</FormLabel>
              <TextField fullWidth margin="normal" size="small" color="primary" variant="outlined"></TextField>
              <FormLabel component="legend">Password</FormLabel>
              <TextField type="password"fullWidth margin="normal" size="small" color="primary" variant="outlined"/>
              <Router>
                  <a href="/forgotPassword" component={Link} exact to="/forgotPassword">Forgot Password?</a> 
              </Router>              
        <br/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <br/>
        <AccountCircleSharpIcon style={{
                  height:"70px",
                  width:"100px",
                  marginLeft:"200px"
              }}/><br/><br/>     
        <FormLabel component="legend">FullName</FormLabel>
                        <TextField fullWidth margin="normal" size="small" color="primary" variant="outlined"></TextField>                        
                        <FormLabel component="legend">Email</FormLabel>
                        <TextField fullWidth margin="normal" size="small" color="primary" variant="outlined"></TextField>
                        <FormLabel component="legend">Password</FormLabel>
                        <TextField type="password"fullWidth margin="normal" size="small" color="primary" variant="outlined"/>
                        <FormLabel component="legend">Mobile Number</FormLabel>
                        <TextField type="password"fullWidth margin="normal" size="small" color="primary" variant="outlined"/>

      </TabPanel>
    </Box>
  );
}