import React from 'react';
import '../BookDetails/BookDetails.scss';
import steveKrug from '../assets/steveKrug.png';
import HeaderBar from '../AppHeader/headerbar';
import Footer from '../Footer/Footer';

class BookDetails extends React.Component {
    render() {

        const array = [
            {
                name: 'Aniket Birla',
                initial: 'AB',
                data: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
            },
            {
                name: 'Shubham Oberoi',
                initial: 'SO',
                data: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
            },
        ];
        return (
            <>
            <HeaderBar />
            <div className='cart-main'>
                <p>Home/Book(4)</p>
                <div className='cart-divide'>
                    <div>
                        <div className='cart-details-out'>
                            <img src={steveKrug} alt='choco' className='cart-det-img'></img>
                        </div>
                        <div className='cart-end'>
                            <button className='notify'>NOTIFY ME</button>
                            <button className='wishlist'>WISHLIST</button>
                        </div>
                    </div>
                    <div className='cart-part2'>
                        <p className='dummies'>UX FOR DUMMIES</p>
                        <p className='subheader'>by steve brug</p>
                        <div className='points-1'>
                            <div className='points'>4.5</div>
                            <p className='subheader2'>(20)</p>
                        </div>
                        <span className='book-cost'>
                            Rs. 1500 <s className='cut-cost'>Rs. 2000</s>
                        </span>
                        <div className='solid-line'></div>
                        <ul>
                            <li className='mybookdetails'>Book Details</li>
                        </ul>
                        <p className='subheader3'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text
                            ever since the 1500s, when an unknown printer took a galley of
                            type and scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap into
                            electronic typesetting, remaining essentially unchanged.
              </p>
                        <div className='solid-line2'></div>
                        <p className='dummies2'>Customer Feedback</p>
                        <p>overall rating</p>
                        <textarea
                            placeholder='write your rewview'
                            className='cart-textarea'
                        ></textarea>
                        <button className='cart-button'>submit</button>
                        <div className='cart-last-data'>
                            {array.map((item) => (
                                <>
                                    <div className='array-map'>
                                        <span className='circle2'>{item.initial}</span>
                                        <div className='array-map-2'>
                                            <div className='item-name'>{item.name}</div>
                                            <div className='subheader4'>{item.data}</div>
                                        </div>
                                    </div>
                                </>
                            ))}
                        </div>
                    </div>


                </div>
            </div>
                <div className="aadjust-footer">
                            <Footer />
                </div>
            </>
        );
    }

}

export default BookDetails;