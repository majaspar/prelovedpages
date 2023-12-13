import { useState, useEffect } from 'react';
//import axios from 'axios';

//import { useNavigate } from "react-router";

export default function Book() {
  const [data, setData] = useState([]);

  // const fetchInfo = async () => {
  //   const res =  await axios.get('http://localhost:5000/api/books')
  //   setData([res.data]);
  // };

  // useEffect(() => {
  //   fetchInfo();
  // }, []);

  
  useEffect(() => {
    // fetch data
    const dataFetch = async () => {
      const data = await (
        await fetch(
          '/api/books',
        )
      ).json();

      // set state when the data received
      setData(data);
    };

    dataFetch();
  }, []);

  return (
    <div className='margins'>Hello!hbhbkjb<br />
      {data.map(book => <h4 key={book._id}>title: "{book.title}", author: {book.author}</h4>)}

    </div>
  )
}
