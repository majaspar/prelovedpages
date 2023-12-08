import { useState, useEffect } from 'react';
import axios from 'axios';
const client = axios.create({
  baseURL: '/api/books'
})
//import { useNavigate } from "react-router";

export default function Book() {

  
  const [data, setData] = useState([]);

  const fetchInfo = async () => {
    return await client.get(url).then((res) => setData(res.data));
  };

  useEffect(() => {
    fetchInfo();
  }, []);


  return (
    <div>Hello!<br />
      {data.map(book => <h4 key={book._id}>title: "{book.title}", author: {book.author}</h4>)}

    </div>
  )
}
