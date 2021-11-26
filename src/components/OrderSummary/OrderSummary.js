import React from 'react';
import { Card } from 'react-bootstrap';
import bookImage from '../assets/bookImage.png';
import { BrowserRouter as route, Link } from 'react-router-dom';
import {Button} from '@material-ui/core';
import { useHistory } from 'react-router';
import '../Cart/Cart';
import Footer from '../Footer/Footer';

class OrderSummary extends React.Component {

    constructor(props) {
        super(props);
        this.state = { value: 1, show: false, btnValue: false, };

    }
    
    handleClick = () => {
        this.setState({
            show: true,
            btnValue: true,

        });
    }


    render() {
        return (
            <>
            <Card className='imagestyle cart-style'>

                <Card.Body>
                    <Card.Text>
                        <div className='cart-header'>
                            <div className='Cart-Name'>Order Summary</div>

                        </div>
                        <div className='cart-second-body'>
                            <div className='card-images'>
                                <Card.Img src={bookImage} className='ss' />
                            </div>
                            <div className='cart-details'>
                                <span className='book-name'>Dont make me think</span>
                                <span className='book-aurthor'>canon doyle</span>
                                <span className='book-cost'>
                                    Rs. 1500 <s className='cut-cost'>Rs. 2000</s>
                                </span>

                            </div>
                        </div>
                        <div className='place-order'>
                            <a href="/order-status" Component={Link} to="/order-status">Checkout</a>
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>
                <div className="adjustmyFooter">
                    <Footer />
                </div>
            </>
        )
    }
}
export default OrderSummary