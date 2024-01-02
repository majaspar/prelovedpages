import React, { useState, useEffect } from 'react';
import '../Admin.css'
import axios from 'axios';
import { useNavigate } from "react-router";
import SectionTitle from '../../components/SectionTitle';

const baseURL = '/api/authors'

export default function NewAuthor() {
  const [author, setAuthor] = useState(null)
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [born, setBorn] = useState(true);
  const [originalLanguage, setOriginalLanguage] = useState('');
  const [country, setCountry] = useState('');
  const [photo, setPhoto] = useState('');
  const [photoSource, setPhotoSource] = useState('');

  const navigate = useNavigate();

  function postAuthorData() {
    axios
      .post(`${baseURL}/add`, {
        firstName, lastName, originalLanguage, country, born, photo, photoSource
      })
      .then((response) => {
        setAuthor(response.data);
      })
      .catch(error => console.log(error));
    navigate('/authors')

  }

  return (
    <>
      <SectionTitle title="Create an author" link="/admin" btn="Go to Admin Dashboard" />
      <section className='admin mt2 margins'>

        <div className="form">
          <p><label className='mr1' htmlFor="firstName">First name: </label>
            <input
              required
              type="text" id="firstName" placeholder="Enter first name"
              onChange={(e) => setFirstName(e.target.value)} /></p>

          <p><label className='mr1' htmlFor="lastName">Last name: </label>
            <input
              required
              type="text" id="lastName" placeholder="Enter last name"
              onChange={(e) => setLastName(e.target.value)} /></p>

<p><label className='mr1' htmlFor="lastName">Born in: </label>
            <input
              required
              type="number" id="lastName" placeholder="Enter date"
              onChange={(e) => setBorn(e.target.value)} /></p>


          <p><label className='mr1' htmlFor="originalLanguage">Language: </label>
            <input
              type="text" id="originalLanguage" placeholder="Enter original language"
              onChange={(e) => setOriginalLanguage(e.target.value)} /></p>



          <p><label className='mr1' htmlFor="country">Country: </label>
            <input
              type="text" id="country" placeholder="Where do/did they live?"
              onChange={(e) => setCountry(e.target.value)} /></p>

  <p><label className='mr1' htmlFor="photo">Photo: </label>
            <input
              type="text" id="photo" placeholder="Enter link"
              onChange={(e) => setPhoto(e.target.value)} /></p>

<p><label className='mr1' htmlFor="photoSource">Photo Source: </label>
            <input
              type="text" id="photoSource" placeholder="Enter source"
              onChange={(e) => setPhotoSource(e.target.value)} /></p>


          <button onClick={postAuthorData} type='submit' className='btn mt1'>Add Author</button>
        </div>

      </section>
    </>
  )
}
