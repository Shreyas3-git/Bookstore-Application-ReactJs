import {React,useState} from 'react';
import {useHistory} from 'react-router-dom';
import { Card } from 'react-bootstrap';
import {Button} from '@material-ui/core';
import '../CustomerDetails/AddressDetails.scss';
import OrderSummary from '../OrderSummary/OrderSummary';

export default function AddressDetails(props) {

    let history = useHistory();
    const bookData = (history.location.state);
    const[btnValue,setBtnValue] = useState(false);
    const[show,setShow] = useState(false);
    
    const handleChange = () => {
        setBtnValue(true);
        setShow(true);
    };

        return (
            <div>
                <Card className='card-style'>
                    <Card.Body>
                        <Card.Text>
                            <div className='Address-header'>
                                <div className='Address-Name'>Customer Details </div>
                                <span className='Address-box'>
                                    <span className='Address-namess'>Add New Address </span>
                                </span>
                            </div>
                            <div className='work-address'>
                                <div>
                                    <input type='radio' value='Male' name='gender' />
                                    <b>1.WORK</b>&nbsp; &nbsp; &nbsp;
                  <label className='edit-class'>Edit</label>
                                </div>
                                <div className='custom-address'>
                                    <label>address</label>
                                    <textarea className='text-area' />
                                </div>
                                <div className='address-fileds'>
                                    <div className='town-value'>
                                        <label>City/Town</label>
                                        <input placeholder='city/town'></input>
                                    </div>
                                    <div className='state-values'>
                                        <label>State</label>
                                        <input placeholder='state'></input>
                                    </div>
                                </div>
                            </div>
                            {!btnValue && (
                                <div className='work-address'>
                                    <div className="address-type">
                                        {/* <b>Type</b> */}
                                    </div>
                                    <div className="radio-button">
                                        <br/>
                                        {/* <input type="radio">Work</input>
                                        <input type="radio">Home</input>
                                        <input type="radio">Other</input> */}
                                    </div>
                                </div>
                            )}

                        </Card.Text>
                        {!btnValue && (
                            <Button color="primary" variant="contained" style={{ float: 'right' }} onClick={handleChange}>CONTINUE</Button>
                        )}
                    </Card.Body>
                </Card>
                {show && !btnValue ? (
                    <Card className='imagestyle cart-style2'>
                        <Card.Body>
                            <Card.Text>Order Summary</Card.Text>
                        </Card.Body>
                    </Card>
                ) : (
                    <OrderSummary />
                )}

            </div >
        );
    }

