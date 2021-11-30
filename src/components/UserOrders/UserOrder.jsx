
import React from 'react';
import '../Wishlist/Wishlist.css';
import steveKrug from '../assets/steveKrug.png';
import Card from '@material-ui/core/Card';
import { CardContent, CardMedia, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import HeaderBar from '../AppHeader/headerbar';
import Footer from '../Footer/Footer';
import {BrowserRouter as Link} from 'react-router-dom';

export default function Wishlist() {

    return (
        <div>
            <HeaderBar />
            <div className="route-link">
            <a href="/book-list" component={Link} to="/book-list">home</a>
                <a href="/user-orders" component={Link} to="/book-list">/order</a>
            </div>

            <div className="Wishlist">
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
                            image={steveKrug}
                            alt=""/>
                            <div className="circledesign">
                            <Typography style={{
                                    marginLeft: '550px',
                                    fontWeight:'bold',
                                    paddingBottom: '10px'
                            }}>Order placed on May 2021</Typography>
                            </div>
                    <CardContent
                        style={{
                            marginRight:"540px",
                            alignContent:"flex-start",
                            marginTop: "-150px",
                            marginBottom:'30px'    
                        }}>
                            <Typography
                            style={{
                                fontWeight: "bold",
                                display:  'flex',
                                flexDirection: 'row',
                                flexWrap: 'nowrap',
                                marginLeft: '110px',
                                marginTop: '30px'         
                            }}>
                                Don't make me think
                            </Typography>
                            <Typography
                            style={{
                                color : "grey",
                                marginLeft:"0px"}}>by Steve krug</Typography>
                        <div className="style-adjust">    
                            <Typography style={{
                                color:"black",
                                fontSize : "20px",
                                fontWeight: "bolder",
                                fontStyle: "initial",
                                fontFamily : "Times new romean",
                                flexDirection: "row",
                                justifyContent:"center",
                                display: "inline",
                                marginLeft: '18px'
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
