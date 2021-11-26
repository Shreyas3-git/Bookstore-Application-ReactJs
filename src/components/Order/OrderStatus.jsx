
import React from 'react';
import '../Order/OrderStatus.css';
import firework from '../assets/firework.jpg';
import { Button } from '@material-ui/core';
import { BrowserRouter as Link } from 'react-router-dom';
import HeaderBar from '../AppHeader/headerbar';
import Footer from '../Footer/Footer';
export default function OrderStatus() {
    return (
        <>
        <HeaderBar />
        <div className="Container">
            <img src={firework} alt="" style={{width:"200px"}}/>
            <div className="labelMessage">
                <h2 >Order Placed Successfully... (:</h2>
            </div>
            <span className="orderstatus">
                <label>hurry!!! your order is confirmed</label><br/>
                <label>the id is #12334234 save order id for</label><br/>
                <label> further communication..</label>
            </span>
            <div className="tableShift">
            <table border="hidden">
                <tbody>
                    <tr>                    
                        <th>Email us</th>
                        <th>Contact us</th>
                        <th>Address</th>
                    </tr>
                    <tr>
                      <td>abc@bookstore.com</td>
                        <td>+91-8163759642</td>
                        <td>
                           <span> 42, 14th Main, 15th Cross Sector,Opp to BDA </span><br/>
                           <span>complex, near kumarakom restaurant,HSR Layout ,</span><br/>
                           <span>Banglore 560034</span>
                        </td>
                    </tr>
                </tbody>

            </table>
                <div className="button">
                <Button color="primary" variant="contained" >Continue Shopping</Button> &nbsp;&nbsp;
                </div>
            </div>
            <div className="myfooter">
                <Footer />
            </div>  
        </div>
        </>
    )
}
