import React from 'react';
import { ArrowRight } from 'react-bootstrap-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import bookImage from '../assets/bookImage.png';
import { Card, Button } from 'react-bootstrap';
import '../Cart/Cart.scss';
import AddressDetails from '../CustomerDetails/AddressDetails';
import HeaderBar from '../AppHeader/headerbar';
import {BrowserRouter as Link} from 'react-router-dom';

class Newcart extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 1, show: false, btnValue: false, };

    }
    handleChangeDec = () => {
        this.setState({
            value: this.state.value - 1,
        });
    };
    handleChangeInc = () => {
        this.setState({
            value: this.state.value + 1,
        });
    };
    handleClick = () => {
        this.setState({
            show: true,
            btnValue: true,

        });
    }


    render() {
        return (
            
            <div>
                <HeaderBar />

            <div className="alignElement">
                <a href="/book-list" component={Link} to="/book-list">home</a>
                <a href="/cart-items" component={Link} to="/book-list">/cart</a>
            </div>


                <Card className='imagestyle cart-style'>
                    <Card.Body>
                        <Card.Text>
                            <div className='cart-header'>
                                <div className='Cart-Name'>My Cart(1)</div>
                                <span className='location-box'>
                                    <ArrowRight />
                                    <span className='book-namess'>Bridge</span>
                                </span>
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
                                    <div className='book-buttons'>
                                        <span
                                            className='circle minus'
                                            onClick={this.handleChangeDec}
                                        ></span>
                                        <span className='cart-amount'>{this.state.value}</span>
                                        <span
                                            className='circle plus'
                                            onClick={this.handleChangeInc}
                                        ></span>
                                    </div>
                                </div>
                            </div>
                            <div className='place-order'>
                                {!this.state.btnValue && (
                                    <Button onClick={this.handleClick} component={Link} to="/order-status">Place Order</Button>
                                )}
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Card>
                {this.state.show ? (
                    <AddressDetails show={this.state.show} />
                ) : (
                    <>
                        <Card className='imagestyle cart-style2'>
                            <Card.Body>
                                <Card.Text>Address Details</Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className='imagestyle cart-style2'>
                            <Card.Body>
                                <Card.Text>Order Summary</Card.Text>
                            </Card.Body>
                        </Card>
                    </>
                )}
            </div>
        );
    }
}

export default Newcart;
