import React, { useState, useEffect } from 'react';
import './Admin.css'
import { useNavigate } from "react-router";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import axios from 'axios'

export default function NewBook({ authorid }) {

  const [title, setTitle] = useState('');
  const [publishedYear, setPublishedYear] = useState();
  const [synopsis, setSynopsis] = useState('');
  const [cover, setCover] = useState('');
  const [isFeatured, setIsFeatured] = useState(false);
  const [isPartOfSeries, setIsPartOfSeries] = useState(false);
  const [series, setSeries] = useState(null);
  const [volume, setVolume] = useState(null);
  const [genre, setGenre] = useState([])

  // const [genreObj, setGenreObj] = useState([{
  //   romance: false, thriller: false, fiction: false, fantasy: false, sciencefiction: false, horror: false, foreign: false, mystery: false, contemporary: false, youngadult: false, historicalfiction: false, childrens: false, nonfiction: false
  // }]);


  const navigate = useNavigate();

  // Genre Checkboxes
  const handleGenreChange = (e) => {
    const value = e.target.value;
    const checked = e.target.checked;
    if (checked) {
      setGenre([
        ...genre, value
      ])
    } else {
      setGenre(genre.filter(e => (e !== value)))
    }
  };

  const baseURL = '/api/books'
  //add book model form submit
  function postBookData() {
    axios
      .post(`${baseURL}/${authorid}/addbook`, {
        title, publishedYear, synopsis, cover, isFeatured, isPartOfSeries, series, volume, genre
      })
      .then((response) => {
        setAuthor(response.data);
      })
      .catch(error => console.log(error));

    navigate(`/allauthors`)
  }

  return (<section className='admin margins mt2'>

    <h2>Create a Book Model</h2>

    <div className='mt2 form'>

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


      <p className='mt1 flex'><label className='mr1' htmlFor="originalLanguage">Synopsis: </label>
        <textarea
          type="text" id="originalLanguage" placeholder="Enter synopsis"
          onChange={(e) => setSynopsis(e.target.value)} /></p>

      <p><label className='mr1' htmlFor="cover">Cover: </label>
        <input
          type="text" id="cover" placeholder="Enter cover url"
          onChange={(e) => setCover(e.target.value)} /></p>

      <p className='mt1'><label className='mr1' htmlFor="isFeatured">Is featured?</label>
        <select
          required
          name="isFeatured" id="isFeatured" defaultValue={false}
          onChange={(e) => setIsFeatured(e.target.value)}>
          <option value={true} >Yes</option>
          <option value={false} >No</option>
        </select></p>

      <p className='mt1'><label className='mr1' htmlFor="isPartOfSeries">Is it a series?</label>
        <select
          required
          name="isPartOfSeries" id="isPartOfSeries" defaultValue={false}
          onChange={(e) => setIsPartOfSeries(e.target.value)}>
          <option value={true} >Yes</option>
          <option value={false} >No</option>
        </select></p>

      {(isPartOfSeries)
        ?
        <div className='ml2 mt1'>
          <p><label className='mr1' htmlFor="series">Series: </label>
            <input
              type="text" id="series" placeholder="Enter series name"
              onChange={(e) => setSeries(e.target.value)} /></p>
          {series !== null &&
            <p><label className='mr1' htmlFor="volume">Volume: </label>
              <input
                required
                type="number" id="volume" placeholder="Volume number"
                onChange={(e) => setVolume(e.target.value)} /></p>}

        </div>
        :
        <></>}

      <div className='NewBook__genre--wrapper mt1 flex'>
        <label>Genre:</label>
        <div className='NewBook__genre'>

          <div className="genre__item flex">
            <input type="checkbox" id="romance" name="genre" value="Romance" onChange={handleGenreChange} />
            <label className='mr2' htmlFor="romance">Romance</label>
          </div>
          <div className="genre__item flex">
            <input type="checkbox" id="fiction" name="genre" value="Fiction" onChange={handleGenreChange} />
            <label className='mr2' htmlFor="fiction">Fiction</label>
          </div>
          <div className="genre__item flex">
            <input type="checkbox" id="contemporary" name="genre" value="Contemporary" onChange={handleGenreChange} />
            <label className='mr2' htmlFor="contemporary">Contemporary</label>
          </div>
          <div className="genre__item flex">
            <input type="checkbox" id="thriller" name="genre" value="Thriller" onChange={handleGenreChange} />
            <label className='mr2' htmlFor="thriller">Thriller</label>
          </div>
          <div className="genre__item flex">
            <input type="checkbox" id="fantasy" name="genre" value="Fantasy" onChange={handleGenreChange} />
            <label className='mr2' htmlFor="fantasy">Fantasy</label>
          </div>
          <div className="genre__item flex">
            <input type="checkbox" id="sciencefiction" name="genre" value="Science Fiction" onChange={handleGenreChange} />
            <label className='mr2' htmlFor="sciencefiction">Science Fiction</label>
          </div>
          <div className="genre__item flex">
            <input type="checkbox" id="horror" name="genre" value="Horror" onChange={handleGenreChange} />
            <label className='mr2' htmlFor="horror">Horror</label>
          </div>
          <div className="genre__item flex">
            <input type="checkbox" id="foreign" name="genre" value="Foreign" onChange={handleGenreChange} />
            <label className='mr2' htmlFor="foreign">Foreign</label>
          </div>
          <div className="genre__item flex">
            <input type="checkbox" id="mystery" name="genre" value="Mystery" onChange={handleGenreChange} />
            <label className='mr2' htmlFor="mystery">Mystery</label>
          </div>
          <div className="genre__item flex">
            <input type="checkbox" id="youngadult" name="genre" value="Young Adult" onChange={handleGenreChange} />
            <label className='mr2' htmlFor="youngadult">Young Adult</label>
          </div>
          <div className="genre__item flex">
            <input type="checkbox" id="childrens" name="genre" value="Childrens" onChange={handleGenreChange} />
            <label className='mr2' htmlFor="childrens">Childrens</label>
          </div>
          <div className="genre__item flex">
            <input type="checkbox" id="historicalfiction" name="genre" value="Historical Fiction" onChange={handleGenreChange} />
            <label className='mr2' htmlFor="historicalfiction">Historical Fiction</label>
          </div>
          <div className="genre__item flex">
            <input type="checkbox" id="nonfiction" name="genre" value="Non-Fiction" onChange={handleGenreChange} />
            <label className='mr2' htmlFor="nonfiction">Non-Fiction</label></div>
        </div>
      </div>
      <button onClick={postBookData} type='submit' className='btn mt3'>Add Book Model</button>
    </div>
    {/* End of form */}
  </section>
  )
}
