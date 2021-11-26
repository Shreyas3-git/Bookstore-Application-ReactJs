
import { DialogContent, DialogTitle, FormLabel, TextField } from '@material-ui/core';
import {React,useState} from 'react';
import { Dialog } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { DialogActions } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel from './TabPanel';
// import TabContext from '@material-ui/core/TabContext';
// import TabList from '@material-ui/core/TabList';
// import TabPanel from '@material-ui/TabPanel';
import '../LoginSignup/Pagestyle.css';
import logo from '../assets/logo.png';
import BookIcon from '@material-ui/icons/Book';
import HeaderBar from '../AppHeader/headerbar';
import Footer from '../Footer/Footer';
// import { Badge } from '@material-ui/core';
// import { withStyles } from '@material-ui/styles';


export default function UserSignUp() {
   
   const [isOpen,setOpen] = useState(false);
   const [value,setValue] = useState(0);
   
   const handleOpenEvent = () => {
       setOpen(!isOpen);
   }
   
   const handleCloseEvent = () => {
       setOpen(!isOpen);
   }

   const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    return (
        <div className="mainContainer">
          <HeaderBar/>  
       
            <div className="dialog-div">
            <br/><br/><br/><br/><br/>
            <label className="header-title">PLEASE LOG IN</label><br/>
            <label className="commment" color="grey">Login to view items in your wishlist:</label><br/><br/><br/>
           <BookIcon  color="secondary" style={{
               height:"80px",
               width:"100px"
           }}/><br/><br/><br/>
            
            <Button color="secondary" variant="outlined" onClick={handleOpenEvent}>LOGIN/SIGNUP</Button>
            
            <Dialog open={isOpen} onClose={handleCloseEvent}>
    
                <DialogContent>
                    <TabPanel value={value} index={1}/>
                <form>
                        
                        {/* <FormLabel component="legend">FullName</FormLabel>
                        <TextField fullWidth margin="normal" size="small" color="primary" variant="outlined"></TextField>                        
                        <FormLabel component="legend">Email</FormLabel>
                        <TextField fullWidth margin="normal" size="small" color="primary" variant="outlined"></TextField>
                        <FormLabel component="legend">Password</FormLabel>
                        <TextField type="password"fullWidth margin="normal" size="small" color="primary" variant="outlined"/>
                        <FormLabel component="legend">Mobile Number</FormLabel>
                        <TextField type="password"fullWidth margin="normal" size="small" color="primary" variant="outlined"/> */}
                    </form>
                </DialogContent>

                <DialogActions>
                    <Button color="primary" variant="contained">Login</Button>
                    <Button color="secondary" variant="contained" onClick={handleCloseEvent}>Cancel</Button>
                </DialogActions>
           </Dialog>
        </div>
            <div className="footerAdjust">
                <Footer />
            </div>
        </div>
    )
}
