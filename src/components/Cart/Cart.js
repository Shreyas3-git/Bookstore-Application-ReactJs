import {React, useState} from 'react';
import { useHistory } from 'react-router';
import { ArrowRight } from 'react-bootstrap-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import steveKrug from '../assets/steveKrug.png';
import { Card, Button } from 'react-bootstrap';
import '../Cart/Cart.scss';
import AddressDetails from '../CustomerDetails/AddressDetails';
import HeaderBar from '../AppHeader/headerbar';


export default function Newcart(props) {

    let history = useHistory();
    const [value,setValue] = useState(1);
    const [show,setShow] = useState(false);
    const[btnValue,setBtnValue] = useState(false);
    const bookData = (history.location.state);

    console.log("Data from BookDetails page to Cart page---->",history.location.state);

    const handleChangeDec = () => {
        setValue(value - 1);
    };

    const handleChangeInc = () => {
        setValue(value + 1);
    };
    
    const handleClick = () => {
        setShow(true);
        setBtnValue(true);
    }


        return (

            <div>
                <HeaderBar /><br/><br/><br/>
                <h1 className='header'>Home / My cart </h1>

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
                                    <Card.Img src={steveKrug} />
                                </div>
                                <div className='cart-details'>
                                    <div className='book-name'>{bookData.bookName}</div>
                                    <div className='book-aurthor'>{bookData.bookAuthor}</div>
                                    <div className='cost-section'>
                                        Rs. {bookData.bookPrice}/- <span className='cut-cost'>Rs. {bookData.priceWithoutDiscount}/-</span>
                                    </div>
                                    <div className='book-buttons'>
                                        <span
                                            className='circle minus'
                                            onClick={handleChangeDec}
                                        ></span>
                                        <span className='cart-amount'>{value}</span>
                                        <span
                                            className='circle plus'
                                            onClick={handleChangeInc}
                                        ></span>
                                    </div>
                                </div>
                            </div>
                            <div className='place-order'>
                                {!btnValue && (
                                    <Button onClick={handleClick}>Place Order</Button>
                                )}
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Card>
                {show ? (
                    <AddressDetails show={show} />
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
