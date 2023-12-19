import React, { useState, useEffect } from 'react';
import './Admin.css'
import axios from 'axios';
import { useNavigate } from "react-router";

const baseURL = '/api/authors'

export default function NewAuthor() {
  const [author, setAuthor] = useState(null)
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [isAlive, setIsAlive] = useState(true);
  const [originalLanguage, setOriginalLanguage] = useState('');
  const [country, setCountry] = useState('');

  const navigate = useNavigate();

  function postAuthorData() {
    axios
      .post(`${baseURL}/add`, {
        firstName, lastName, isAlive, originalLanguage, country
      })
      .then((response) => {
        setAuthor(response.data);
      })
      .catch(error => console.log(error));
      navigate('/allauthors')

  }

  return (<section className='admin mt2 margins'>

    <h2 className='mb2'>Create an Author</h2>

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


      <p><label className='mr1' htmlFor="originalLanguage">Language: </label>
        <input
          type="text" id="originalLanguage" placeholder="Enter original language"
          onChange={(e) => setOriginalLanguage(e.target.value)} /></p>



      <p><label className='mr1' htmlFor="country">Country: </label>
        <input
          type="text" id="country" placeholder="Where do they live?"
          onChange={(e) => setCountry(e.target.value)} /></p>

      <p><label className='mr1' htmlFor="isAlive">Is alive? </label>
        <select
          required
          name="isAlive" id="isAlive" defaultValue="Yes"
          onChange={(e) => setIsAlive(e.target.value)}>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select></p>


      <button onClick={postAuthorData} type='submit' className='btn mt1'>Add Author</button>
    </div>

  </section>
  )
}
