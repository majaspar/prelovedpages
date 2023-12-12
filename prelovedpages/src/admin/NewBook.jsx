import { useState, useEffect } from 'react';
import './Admin.css'
//import { useNavigate } from "react-router";

export default function NewBook() {

  const [title, setTitle] = useState('');
  const [publishedYear, setPublishedYear] = useState();
  const [synopsis, setSynopsis] = useState('');
  const [cover, setCover] = useState('');
  const [isFeatured, setIsFeatured] = useState(false);


  const postBookData = () => {
    console.log(title)
    console.log(publishedYear)
    console.log(synopsis)
    console.log(cover)
    console.log(isFeatured)
  }
  return (<section className='admin margins mt2'>

    <h2>Create a Book Model</h2>

    <form className='mt2'>

      <p><label className='mr1' htmlFor="title">Title: </label>
        <input
        required
        type="text" id="title" placeholder="Enter title"
        onChange={(e) => setTitle(e.target.value)} /></p>

      <p><label className='mr1' htmlFor="publishedYear">Year: </label>
        <input 
        required
        type="text" id="publishedYear" placeholder="When was it published?"
        onChange={(e) => setPublishedYear(e.target.value)} /></p>


      <p><label className='mr1' htmlFor="originalLanguage">Synopsis: </label>
        <input
        type="text" id="originalLanguage" placeholder="Enter synopsis"
        onChange={(e) => setSynopsis(e.target.value)} /></p>

      <p><label className='mr1' htmlFor="cover">Cover: </label>
        <input
        type="text" id="cover" placeholder="Enter cover url"
        onChange={(e) => setCover(e.target.value)} /></p>

      <p><label className='mr1' htmlFor="isFeatured">Is featured? </label>
        <select 
        required
        name="isFeatured"  id="isFeatured" defaultValue={false} 
        onChange={(e) => setIsFeatured(e.target.value)}>
          <option value={true} >Yes</option>
          <option value={false} >No</option>
        </select></p>


      <button onClick={postBookData} type='submit' className='btn mt1'>Add Book Model</button>
    </form>

  </section>
  )
}
