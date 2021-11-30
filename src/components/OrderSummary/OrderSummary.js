import {React, useState} from 'react';
import { useHistory } from 'react-router';
import { Card } from 'react-bootstrap';
import bookImage from '../assets/bookImage.png';
import { BrowserRouter as route, Link } from 'react-router-dom';
import {Button} from '@material-ui/core';
import '../Cart/Cart';
import Footer from '../Footer/Footer';

export default function OrderSummary(props){

    const history = useHistory();
    const bookData = (history.location.state);
    const [btnValue,setBtnValue] = useState(false);
    const [show,setShow] = useState(false);
    
    console.log("Book data from AddressDetails page to OrderSummary page ---->",bookData);


    const handleClick = () => {
        setBtnValue(true);
        setShow(true);    
    }
    


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
                                <span className='book-name'>{bookData.bookName}</span><br/>
                                <span className='book-aurthor'>{bookData.bookAuthor}</span><br/>
                                <span className='cost-section'>
                                    Rs. {bookData.bookPrice}/- <s className='cut-cost'>Rs. {bookData.priceWithoutDiscount}/-</s>
                                </span>

                            </div>
                        </div>
                        <div className='place-order'>
                            <Button onClick={() => {(history.push('/order-status'))}} color="secondary" variant="contained" style={{
                                marginBottom:"20px",
                            }}></Button>
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
