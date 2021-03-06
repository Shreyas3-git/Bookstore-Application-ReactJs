
import { FormLabel, TextField, Typography } from '@material-ui/core'
import React from 'react'
import HeaderBar from '../AppHeader/headerbar';
import { Button } from '@material-ui/core';
import { FormControlLabel } from '@material-ui/core';
import { RadioGroup,Radio } from '@material-ui/core';
import {BrowserRouter as Link} from 'react-router-dom';
import '../UpdatePersonInfo/Personaldetails.css';
import Footer from '../Footer/Footer';

export default function Personaldetails() {
    return (
        <div>
            <HeaderBar />
            <div className="route-link">
                <a href="/book-list" component={Link} to="/book-list">home</a>
                <a href="/user-details" component={Link} to="/user-details">/profile</a>
            </div>
            <div className="titlename">
                <label className="person-title">Personal Details</label>
                <label className="update">Edit</label>
                <FormLabel component="legend" style={{
                    marginLeft: '-70px',
                    marginTop: '20px'
                    }}>Full Name</FormLabel>
                <TextField fullWidth margin="normal" size="small" color="primary" variant="outlined" style={{
                      marginLeft: '270px',
                      width: '500px' 
                }}/>
                <FormLabel component="legend" style={{
                    marginLeft: '-80px',
                    }}>Email</FormLabel>
                <TextField type="email" fullWidth margin="normal" size="small" color="primary" variant="outlined" style={{
                      marginLeft: '270px',
                      width: '500px' 
                }}/>
                <FormLabel component="legend" style={{
                    marginLeft: '-70px',
                    }}>Password</FormLabel>
                <TextField type="password" fullWidth margin="normal" size="small" color="primary" variant="outlined" style={{
                      marginLeft: '270px',
                      width: '500px' 
                }}/>
                <FormLabel component="legend" style={{
                    marginLeft: '-50px',
                    }}>Mobile Number</FormLabel>
                <TextField fullWidth margin="normal" size="small" color="primary" variant="outlined" style={{
                      marginLeft: '270px',
                      width: '500px' 
                }}/>
            </div>      
              <div className="address-details">
              <label className="person-title">Address Details</label>
              <Button color="secondary" variant="outlined" style={{
                  marginLeft:'150px'
              }}>Add New Address</Button>
              </div>  
              <div className="workaddress">
                  <label className="person-title">Work</label> 
                  <label className="update">Edit</label>
                  <FormLabel component="legend" style={{
                      marginLeft:"-10px",
                    marginTop: '20px'                    
                    }}>Address</FormLabel>
                
                <TextField fullWidth margin="normal" size="small" color="primary" variant="outlined" style={{
                      marginLeft: '310px',
                      width: '500px' 
                }}/>

                <div className="adjustColoum">
                    <FormLabel component="legend" style={{
                            paddingBottom:"20px",
                            marginRight:"105px"
                        }}>City/Town</FormLabel>
                    <div className="textAdjust">
                        <TextField fullWidth margin="normal" size="small" color="primary" variant="outlined" style={{
                            marginLeft: '-100px',
                            width: '230px',
                            paddingTop:"10px"
                        }}/>
                    </div>                    
                    <FormLabel component="legend" style={{
                        marginRight:"140px",
                        }}>State</FormLabel>
                    <div className="textAdjust">
                        <TextField fullWidth margin="normal" size="small" color="primary" variant="outlined" style={{
                            marginLeft:  '-70px',
                            width: '230px',
                            paddingTop:"10px" 
                        }}/>
                    </div>
                </div>    
                <div className="row-content">
                        <FormLabel component="legend" className="label text" style={{
                            marginLeft:'-30px'
                        }}>Type</FormLabel>
                            <RadioGroup className="radio-group" name="gender" >
                                <div className="rowArrangement"> 
                                <FormControlLabel value="Home" control={<Radio/>} label="Home" />
                                <FormControlLabel value="Work" control={<Radio/>} label="Work"/>
                                <FormControlLabel value="Other" control={<Radio/>} label="Other"/>
                                </div>
                            </RadioGroup>
                            <Button color="primary" variant="contained" style={{marginRight:'20px'}}>Save</Button>
                </div>
              </div>
              <div className="footerMargin">
                  <Footer />         
              </div>
        </div>
    )
}
