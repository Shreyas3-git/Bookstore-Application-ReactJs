import './App.css';
import HeaderBar from './components/AppHeader/headerbar';
import UserSignUp from './components/LoginSignup/UserSignUp';
import Books from '../src/components/Booklist/books';
import Footer from './components/Footer/Footer';
import BooksCard from './components/Book/BooksCard';
import OrderStatus from './components/Order/OrderStatus';
import Wishlist from './components/Wishlist/Wishlist';
import ResetPassword from './components/Forgot_Password/ResetPassword';
import UserOrder from './components/UserOrders/UserOrder';
import Personaldetails from './components/UpdatePersonInfo/Personaldetails';
import {BrowserRouter, BrowserRouter as Router,Route,Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
     
          {/* <HeaderBar /> */}

              {/* <BooksCard /> */}
              {/* <UserSignUp /> */}
              {/* <ResetPassword /> */}
              {/* <OrderStatus /> */}
              {/* <Wishlist /> */}
              {/* <UserOrder /> */}
              {/* <Personaldetails /> */}
          {/* <Footer /> */}

          <BrowserRouter>
              <Switch>
                  <Route path="/" exact component={UserSignUp}></Route>
                  <Route path="/book-list" exact component={BooksCard}></Route> 
                  <Route path="/forgotPassword" exact component={ResetPassword}></Route>
                  <Route path="/order-status" exact component={OrderStatus}></Route>
                  <Route path="/user-wishlist" exact component={Wishlist}></Route>
                  <Route path="/user-orders" exact component={UserOrder}></Route>
                  <Route path="/user-details" exact component={Personaldetails}></Route>
              </Switch>
          </BrowserRouter>
    </div>
  );
}

export default App;
