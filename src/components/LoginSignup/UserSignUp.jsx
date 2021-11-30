import { DialogContent } from '@material-ui/core';
import {React,useState} from 'react';
import { Dialog } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { DialogActions } from '@material-ui/core';
import TabPanel from './TabPanel';
import '../LoginSignup/Pagestyle.css';
import BookIcon from '@material-ui/icons/Book';
import HeaderBar from '../AppHeader/headerbar';
import Footer from '../Footer/Footer';


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
                </DialogContent>

                <DialogActions>
                    <Button color="primary" variant="contained">Continue</Button>
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
