import {React,useState,useEffect} from 'react';
import HeaderBar from '../AppHeader/headerbar';
import Books from '../Booklist/books.css';
import Card from '@material-ui/core/Card';
import { AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { CardContent, CardMedia, Container, Typography } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import bookImage from '../assets/bookImage.png';
import '../Book/BooksCard.css';
import Footer from '../Footer/Footer';
import { useHistory } from 'react-router-dom';
const httpService = require('../Service/BookService/Book');
// import '../Service/BookServices/BooksService';


const useStyles = makeStyles((theme) => ({
  root: {
    width: "80vw",
    height: "80vh",
    background: theme.palette.grey[200],
    paddingTop: theme.spacing(10),
  },
  media: {
    height: 160,
    width: "80%",
    marginLeft: "1%",
  },
}));

export default function BooksCard() {
  
  let history = useHistory();
  console.log("history hook --->",history);
  const classes = useStyles();
  const[bookData,setBookData] = useState([]);
  const[select,setSelect] = useState('');
  
  const handleChange = (event) => {
    setSelect(event.target.value);
  }

  const newestArrival = () => {
    httpService.getListOfBooks().then(response => {
      console.log(response.data.data);
      setBookData(response.data.data);
      console.log("use history containing all the data--->");
    }).catch(error => {
      console.log(error)
    })  
  }

  useEffect(() => {
   httpService.getListOfBooks().then(response => {
     console.log(response.data.data);
     setBookData(response.data.data);
   }).catch(error => {
     console.log(error)
   })},[])

   const sortBooksDecendingOrder = () => {
      httpService.HighToLow().then(sortdata => {
        console.log(sortdata.data.data);
        setBookData(sortdata.data.data);
      }).catch(error => {
          console.log(error);
      })}

   const sortBooksAscendingOrder = () => {
        httpService.LowToHigh().then(ascendingOrder => {
            console.log(ascendingOrder.data.data);
            setBookData(ascendingOrder.data.data);
        }).catch(error => {
            console.log(error);
        })
   }   

   
  return (
        <>  
            <div>
                <HeaderBar/>
            </div>
            <div>
         
        <table class="table-border">
          <tbody>
          <div className="parent">       
          <div className="mybooks">
          <tr>
            <th className="title-container">
              <h3 >Books</h3>
            </th>
            <th className="booklist">
              <small className="margin-setter">(128 items)</small>
            </th>
            </tr>
            </div>
            <tr>
            <td className="tablesort">
              {/* <select >
                <option value="Sortbyrelevance">Sort by relevance</option>
                <option value="lowtohigh">Price : Low to High</option>
                <option value="hightolow">Price : High to Low</option>
                <option value="newarrival">Newest Arrival</option>
              </select> */}

        <FormControl variant="standard" sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-standard-label" style={{
            width:"60px",
            marginTop:"-15px",
            fontSize:"12px"
        }}>Sort_by_relevance</InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={select}
                  variant="outlined"
                  color="secondary"
                  onChange={handleChange}
                  label="Age"
                  style={{
                    width:"160px",
                    marginTop:"0px",
                    height:"28px",
                    fontSize:"12px"
                }}
                >
                  <MenuItem value="">
                  </MenuItem>
                  <MenuItem value="low to high" onClick={sortBooksAscendingOrder}>Price: Low To High</MenuItem>
                  <MenuItem value="high to low" onClick={sortBooksDecendingOrder}>Price: High To Low</MenuItem>
                  <MenuItem value="newest arrival" onClick={newestArrival}>Newest Arrival</MenuItem>
                </Select>
              </FormControl>

            </td>
          </tr>
          </div>
          </tbody>
        </table>
        </div>

        <div className="bookContainer">
          <AppBar />
            <Container style={{
                marginTop:"30px"
            }}>
              <Grid spacing={5} style={{
                    display:"flex",
                    flexDirection:"row",
                    flexWrap:"nowrap",
              }}>
                {bookData.length > 0 &&
                 bookData.map((book) => (

                  <div>
                  <Grid  item sm={20}>
                 <Card 
                    key={book.id}
                    // sx={{
                    //   maxWidth: 300,
                    //   border: 1,
                    //   zIndex: "tooltip",
                    //   boxShadow: 2,
                    //   margin: 1,
                    //   marginBottom: 4,
                    //   paddingLeft: 0,
                    //   height: 440,
                    //   width: 320,
                    // }}
                    style={{
                        marginLeft: "35px"
                    }}
                  >
                   
                     <div className="backgroundbook">
                     <CardMedia onClick={() => {(history.push('/book-details',book))}} 
                     image={bookImage}
                     alt="book don't make me think" 
                     style={{
                       marginLeft: "40px",
                       justifyContent:"center",
                       height:"110px",
                       width:"90px",                    
                     }} />
                     </div> 
                     <CardContent >
                           <Typography style={{
                           top: "327px",
                           left: "191px",
                           width: "130px",
                           height: "19px",
                           font: "normal normal normal 14px/19px Roboto",
                           letterSpacing: "0px",
                           color: "#0A0102",
                           opacity: 1,
                           paddingLeft:"-25px",
                         }}>{book.bookName}</Typography>
                           <Typography
                           style={{
                               top: "-30px",
                               left: "191px",
                               width: "63px",
                               height: "13px",
                               textAlign: "left",
                               font: "normal normal normal 13px/16px Roboto",
                               // marginRight: "20px",
                               letterSpacing: "0px",
                               color: "#878787",
                               opacity: 1,
                           }}>{book.bookAuthor}</Typography>
                           <Typography style={{
                             background: "#388E3C 0% 0% no-repeat padding-box",
                             font: "normal normal normal 14px/16px Roboto",
                             borderRadius: "1px",
                             opacity: 1,
                             top: "367px",
                             left: "191px",
                             width: "33px",
                             height: "19px",
                             fontWeight:"bold",
                             marginLeft:"8px",
                          
                           }}>{book.bookRating}</Typography>
                         <div className="row-arrange">  
                           <Typography
                           style={{
                             textAlign: "left",
                             font: "normal normal bold 13px/16px Roboto",
                             letterSpacing: "0px",
                             color: "#0A0102",
                             opacity: 1,
                           }}>Rs.{book.bookPrice}/-</Typography>
                           <Typography style={{
                             textAlign: "left",
                             textDecoration: "line-through",
                             font: "normal normal normal 13px/16px Roboto",
                             letterSpacing: "0px",
                             color: "#878787",
                             opacity: 1,
                             marginLeft:"5px"
                           }}>Rs {book.priceWithoutDiscount}/-</Typography>
                        </div>                              
                     </CardContent>                 
                 </Card>
                 </Grid>
                 </div>
                 ))}

                  {/* </Col>
                  </Row>           */}
              </Grid>
              </Container>
        </div>

      <Footer />     
        
        </>
    )
}
