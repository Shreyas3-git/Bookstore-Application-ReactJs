
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core';
import React from 'react';
import HeaderBar from '../AppHeader/headerbar';
import Footer from '../Footer/Footer';
import '../Forgot_Password/ResetPassword.css';
import { TextField } from '@material-ui/core';
import { FormLabel } from '@material-ui/core';
import AccountCircleSharpIcon from '@material-ui/icons/AccountCircleSharp';
import {BrowserRouter as Route,Link} from 'react-router-dom';
import UserSignUp from '../LoginSignup/UserSignUp';

export default function ResetPassword() {
    return (
        <>
            <HeaderBar />
            <div className="title-password">
                <span >Forgot Your Password?</span>
            </div>
            <Dialog open={true}>
                <DialogTitle style={{backgroundColor:"lightgrey"}}>
                    <span className="dialogTitle">Reset Password!!!</span>
                </DialogTitle>
                    <DialogContent style={{
                        // backgroundColor: "ThreeDShadow"
                    }}>
                    <AccountCircleSharpIcon style={{
                        height:"70px",
                        width:"100px",
                        marginLeft:"60px"
                    }}/>
                        <form>
                        <FormLabel component="legend" style={{fontWeight:"bold"}}>Email</FormLabel>
                        <TextField fullWidth margin="normal" size="small" color="secondary" variant="outlined" style={{fontWeight:"bold"}}></TextField>                        
                        <FormLabel component="legend" style={{fontWeight:"bold"}}>New Password</FormLabel>
                        <TextField fullWidth margin="normal" size="small" color="secondary" variant="outlined" style={{fontWeight:"bold"}}></TextField>                        
                        <FormLabel component="legend" style={{fontWeight:"bold"}}>Confirm Password</FormLabel>
                        <TextField fullWidth margin="normal" size="small" color="secondary" variant="outlined" style={{fontWeight:"bold"}}></TextField>                       
                        </form>
                    </DialogContent>
                    <DialogActions style={{
                        marginTop:"0px",
                        backgroundColor: "ActiveBorder"
                    }}>
                        {/* <Button component={Link} to="/login-signup" color="primary" variant="contained">Create Account</Button> */}
                        <Button component={Link} to="/" color="secondary" variant="contained">Create Account</Button> &nbsp;&nbsp;
                        <Button color="primary" variant="contained">Save</Button>
                    </DialogActions>
            </Dialog>
            <div className="adjust-footer">
                <Footer />
            </div>
        </>
    )
}
