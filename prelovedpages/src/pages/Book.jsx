import { useState, useEffect } from 'react';
import axios from 'axios';

//import { useNavigate } from "react-router";
// {
//     _id: "",
//     title: "",
//     author: "",
//     publishedYear: 0,
//     genre: "",
//     synopsis: "",
//     cover: ""

//   }
export default function Book() {
  //  const [books, setBooks] = useState([ ]);

    //   useEffect(() => {
    //     axios.get('/api/books')
    //     .then(response => setBooks(response.data))
    // }, [])
    //   const getData = async() => {
    //     const res = await axios.get('/api/books')
    //     setBooks([res.data])
    //   }

 

    return (
        <div>Hello!<br/>
        {/* {books.map(book => <h4 key={book._id}>title : {book.title} by {book.author}</h4>)}
        */}
      </div>
    )
}
