

import {React,useState} from 'react';
import { AppBar, IconButton, InputBase, Toolbar } from '@material-ui/core';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import  ShoppingCartIcon  from '@material-ui/icons/ShoppingCart';
import { Badge } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import SearchIcon from "@material-ui/icons/SearchOutlined";
import { withStyles } from '@material-ui/styles';
import logo from  '../assets/education.svg';
import search from '../assets/search.jpg';
import Books from '../Booklist/books';
import '../AppHeader/header.css';
import {BrowserRouter as Route,Link} from 'react-router-dom';
import { Dialog } from '@material-ui/core';
import { DialogTitle } from '@material-ui/core';
import ShoppingBagIcon from '@material-ui/icons/ShoppingBasket';
import FavoriteOutlinedIcon from '@material-ui/icons/FavoriteOutlined';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Button } from '@material-ui/core';

const StyledBadge = withStyles(() => ({
    badge: {
      right: -2,
      color:"black",
      backgroundColor:"white",
  /*     border: `1px solid white`,
   */    padding: "0 4px",
        
    },
  }))(Badge);
  
export default function HeaderBar(props) {

    const[openDialog,setOpenDialog] = useState(false);

    const handleOpen = () => {
        setOpenDialog(true);
    }

    const handleClose = () => {
        setOpenDialog(false);
    }    
    return (
        <div className="Container">
            <AppBar className="appbar-section">
                {/* <Toolbar className=""> */}
                <div className="header-section">
                <div className="leftOptions">
                 <div className="title">
                     <img className="titleLogo" src={logo}/>
                     <Typography className="titleName" >Bookstore</Typography>
                </div>
                <div className="search" >
                    <div className="searchIcon">
                        <Search className="icon-style"></Search>
                        {/* <img className="icon-style" src={search} alt=""/> */}
                        <InputBase className="textInput" placeholder="Search..." />
                       
                    </div>
                </div>
                </div>
                <div className="alignContent">
                    <IconButton className="profileButton">
                        <StyledBadge >   
                        {/* <hr className="vertical-line" width="1" hight="13"></hr> */}
                        <PersonOutlineIcon className="profileIcon" onClick={handleOpen}/>
                        <label className="profile-text">Profile</label >
                        </StyledBadge>
                        <Dialog open={openDialog} onClose={handleClose} style={{
                            marginLeft:"510px",
                            marginBottom:"490px"
                        }}>
                            <div className="dialogName">
                            <DialogTitle style={{
                                backgroundColor: "lightgray",
                                color:"brown",
                                marginBottom:"10px"
                            }}>Welcome to user profile..</DialogTitle></div>
                            <div className="alignIcons">
                            <AccountCircleIcon className="userProfileIcon" />
                            <a href="/user-details" component={Link} to="/user-details" style={{
                                marginLeft:"20px",
                                color:"grey",
                            }}>Profile</a>
                            </div>
                            <div className="alignIcons">
                            <ShoppingBagIcon className="userProfileIcon"/>   
                            <a href="/user-orders" component={Link} to="/user-orders" style={{
                                marginLeft:"20px",
                                color:"grey"
                            }}>My Order</a>
                            </div>
                            <div className="alignIcons">
                            <FavoriteOutlinedIcon className="userProfileIcon" />
                            <a href="/user-wishlist" component={Link} to="/user-wishlist" style={{
                                marginLeft:"20px",
                                color:"grey"
                            }}>Wishlist</a>
                            </div>
                            <div className="buttonAlign">
                            <Button component={Link} to="/" color="secondary" variant="contained" >Logout</Button> &nbsp;&nbsp;
                            </div>
                        </Dialog>
                    </IconButton>
                    
                   {/* <SearchIcon className="buttonSearch"/> */}
                    <IconButton className="cartButton">
                        <StyledBadge>
                                <ShoppingCartIcon className="shoppingIcon" />
                                <label className="profile-text">cart</label >
                        </StyledBadge>
                       
                    </IconButton>                   
                 
                </div>   
                </div>

            </AppBar>
        </div>
    )
}


