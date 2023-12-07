import { useState, useEffect } from 'react';
//import { useNavigate } from "react-router";
import axios from 'axios';

export default function Create() {
  const [books, setBooks] = useState([{
    _id: "",
    title: "",
    author: "",
    publishedYear: 0,
    genre: "",
    synopsis: "",
    cover: ""
  }]);
  //const navigate = useNavigate();

  const getData = async() => {
    const res = await axios.get('/api/books')
    setBooks([res.data])
  }

  useEffect(() => {
    getData()
  }, [])

  return (<section>
    
    <div>
      {books.map(book => <h4 key={book._id}>title : {book.title} by {book.author}</h4>)}
    </div>
    {/* <h3>Create New Book</h3>
     <form onSubmit={onSubmit}>
       <div>
         <label htmlFor="title">Title</label>
         <input
           type="text"
           id="title"
           value={form.title}
           onChange={(e) => updateForm({ title: e.target.value })}
         />
       </div>
       <div>
         <label htmlFor="author">Author</label>
         <input
           type="text"
           id="author"
           value={form.author}
           onChange={(e) => updateForm({ author: e.target.value })}
         />
       </div>
       
       <div>
         <label htmlFor="publishedYear">Year Published:</label>
         <input
           type="number"
           id="publishedYear"
           value={form.publishedYear}
           onChange={(e) => updateForm({ publishedYear: e.target.value })}
         />
       </div>
       
       <div>
         <input
           type="submit"
           value="Create book"
         />
       </div>
     </form> */}
  </section>
  )
}
