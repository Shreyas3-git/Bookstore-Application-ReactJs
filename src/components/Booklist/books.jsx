
import React from 'react';
import '../Booklist/books.css';

// const useStyles = makeStyles((theme) => ({
//     root: {
//       width: "80vw",
//       height: "80vh",
//       background: theme.palette.grey[200],
//       paddingTop: theme.spacing(10),
//     },
//     media: {
//       height: 160,
//       width: "80%",
//       marginLeft: "1%",
//     },
//   }));

export default function Books() {
    // const classes = useStyles();

    return (
        <>

    <div className="book-table">
        <table class="table-borderless">
          <tr>
            <th className="container">
              <h3 >Books</h3>
            </th>
            <th className="booklist">
              <small className="margin-setter">(128 items)</small>
            </th>
            <td className="booksort">
              <select >
                <option value="Sortbyrelevance">Sort by relevance</option>
                <option value="lowtohigh">Price : Low to High</option>
                <option value="hightolow">Price : High to Low</option>
                <option value="newarrival">Newest Arrival</option>
              </select>
            </td>
          </tr>
        </table>
      </div>

      
          </>
      )
}
