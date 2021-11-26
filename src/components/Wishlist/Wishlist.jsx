
import React from 'react';
import '../Wishlist/Wishlist.css';
import bookImage from '../assets/bookImage.png';
import Card from '@material-ui/core/Card';
import { CardContent, CardMedia, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import HeaderBar from '../AppHeader/headerbar';
import Footer from '../Footer/Footer';
import {BrowserRouter as Link} from 'react-router-dom';

export default function Wishlist() {
    return (
        <div>
            <HeaderBar />
            <div className="route-link">
            <a href="/book-list" component={Link} to="/book-list">home</a>
            <a href="/user-wishlist" component={Link} to="/user-wishlist">/wishlist</a>
            </div>

            <div className="Wishlist">
                <span className="list-title">My Wishlist(01)</span>
                <div className="bookdetails">
                    <Card>
                            <CardMedia 
                            style={{
                                height: "80px",
                                width : "60px",
                                marginLeft : "30px",
                                marginTop : "35px",
                            }}
                            component="img"
                            image={bookImage}
                            alt=""/>
                      
                                <DeleteIcon  style={{
                                    marginLeft: "550px",
                                    color: "grey",
                                    marginTop: "0px",
                                }} />
                    <CardContent
                        style={{
                            marginRight:"540px",
                            alignContent:"flex-start",
                            marginTop: "-126px",
 
                        }}>
                            <Typography
                            style={{
                                fontWeight: "bold"           
                            }}>Don't make me think</Typography>
                            <Typography
                            style={{color : "grey"}}>by Steve krug</Typography>
                        <div className="style-adjust">    
                            <Typography style={{
                                color:"black",
                                fontSize : "20px",
                                fontWeight: "bolder",
                                fontStyle: "initial",
                                fontFamily : "Times new romean",
                                flexDirection: "row",
                                justifyContent:"center",
                                display: "inline"
                                // marginTop: "-30px"
                            }}>Rs. 1500/-</Typography>
                            <Typography
                            style={{
                                marginLeft: "8px",
                                color: "grey",
                                fontSize : "18px",
                                fontStyle: "initial",
                                fontFamily : "Times new romean",
                                textDecoration: "line-through",
                                display: "flex",
                                flexDirection: "row",
                                justifyContent:"center"
                                }}>2000/-</Typography>
                        </div>
                    </CardContent>


                    </Card>
                </div>
            </div>
            <div className="myfooter">
                <Footer />
            </div>

        </div>
    )
}
