import { useState, useEffect } from 'react';
import './Admin.css'
//import { useNavigate } from "react-router";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';

import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';

export default function NewBook() {

  const [title, setTitle] = useState('');
  const [publishedYear, setPublishedYear] = useState();
  const [synopsis, setSynopsis] = useState('');
  const [cover, setCover] = useState('');
  const [isFeatured, setIsFeatured] = useState(false);
  const [isPartOfSeries, setIsPartOfSeries] = useState(false);
  const [series, setSeries] = useState(null);
  const [volume, setVolume] = useState(null);

  const [genre, setGenre] = useState({
    romance: false,
    thriller: false,
    fiction: false,
    fantasy: false,
    sciencefiction: false,
    horror: false,
    foreign: false,
    mystery: false,
    contemporary: false,
    youngadult: false,
    historicalfiction: false,
    childrens: false,
    nonfiction: false
  });


  // Genre Checkboxes
  const handleChange = (event) => {
    setGenre({
      ...genre,
      [event.target.name]: event.target.checked,
    });


  };

  const { romance, thriller, fiction, fantasy, sciencefiction, horror, foreign, mystery, contemporary, youngadult, historicalfiction, childrens, nonfiction } = genre;

  //add book model form submit
  const postBookData = () => {
    console.log(title)
    console.log(publishedYear)
    console.log(synopsis)
    console.log(cover)
    console.log('isFeatured:', isFeatured)
    console.log('isPartOfSeries:', isPartOfSeries)
    console.log('series:', series)
    console.log('volume:', volume)
    console.log('genre:', genre)
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

      <div className='mt1 flex'>

        <label>Genre</label>
        <FormControl component="fieldset" variant="standard">
          <FormGroup>
            <div className='NewBook__genre flex'>
              <FormControlLabel
                control={<Checkbox checked={romance} onChange={handleChange} name="romance" />}
                label="Romance"
              />
              <FormControlLabel
                control={<Checkbox checked={thriller} onChange={handleChange} name="thriller" />}
                label="Thriller"
              />
              <FormControlLabel
                control={<Checkbox checked={fiction} onChange={handleChange} name="fiction" />}
                label="Fiction"
              />
              <FormControlLabel
                control={<Checkbox checked={fantasy} onChange={handleChange} name="fantasy" />}
                label="Fantasy"
              />
              <FormControlLabel
                control={<Checkbox checked={sciencefiction} onChange={handleChange} name="sciencefiction" />}
                label="Science Fiction"
              />
              <FormControlLabel
                control={<Checkbox checked={horror} onChange={handleChange} name="horror" />}
                label="Horror"
              />
              <FormControlLabel
                control={<Checkbox checked={foreign} onChange={handleChange} name="foreign" />}
                label="Foreign"
              />
              <FormControlLabel
                control={<Checkbox checked={mystery} onChange={handleChange} name="mystery" />}
                label="Mystery"
              />
              <FormControlLabel
                control={<Checkbox checked={contemporary} onChange={handleChange} name="contemporary" />}
                label="Contemporary"
              />
              <FormControlLabel
                control={<Checkbox checked={youngadult} onChange={handleChange} name="youngadult" />}
                label="Young Adult"
              />
              <FormControlLabel
                control={<Checkbox checked={historicalfiction} onChange={handleChange} name="historicalfiction" />}
                label="Historical Fiction"
              />
              <FormControlLabel
                control={<Checkbox checked={childrens} onChange={handleChange} name="childrens" />}
                label="Childrens"
              />
              <FormControlLabel
                control={<Checkbox checked={nonfiction} onChange={handleChange} name="nonfiction" />}
                label="Non-Fiction"
              />
            </div>
          </FormGroup>
        </FormControl>
      </div>
      <button onClick={postBookData} type='submit' className='btn mt1'>Add Book Model</button>
    </form>

  </section>
  )
}
