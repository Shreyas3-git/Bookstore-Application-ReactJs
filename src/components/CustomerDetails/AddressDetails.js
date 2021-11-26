import React from 'react';
import { Card, Button } from 'react-bootstrap';
import '../CustomerDetails/AddressDetails.scss';
import OrderSummary from '../OrderSummary/OrderSummary';

class AddressDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = { btnValue: false };
    }

    handleChange = () => {
        this.setState({ btnValue: true });
    };
    render() {
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
                            {!this.state.btnValue && (
                                <div className='work-address'>
                                    <div>
                                        <input type='radio' value='Male' name='gender' />
                                        <b>2.HOME</b>
                                    </div>
                                    <div>
                                        <label style={{ marginLeft: '15px' }}>Address</label>
                                        <p style={{ marginLeft: '15px' }}>hello</p>
                                    </div>
                                </div>
                            )}

                        </Card.Text>
                        {!this.state.btnValue && (
                            <Button style={{ float: 'right' }} onClick={this.handleChange}>
                                CONTINUE
                            </Button>
                        )}
                    </Card.Body>
                </Card>
                {this.props.show && !this.state.btnValue ? (
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

}
export default AddressDetails;