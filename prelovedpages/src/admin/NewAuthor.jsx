import React, { useState, useEffect } from 'react';
import './Admin.css'
//import { useNavigate } from "react-router";


export default function NewAuthor() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [isAlive, setIsAlive] = useState(true);
  const [originalLanguage, setOriginalLanguage] = useState('');

  const postAuthorData = () => {
    console.log(firstName);
    console.log(lastName);
    console.log(isAlive);
    console.log(originalLanguage);
  }
  return (<section className='admin mt2 margins'>

    <h2>Create an Author</h2>

    <form className='mt2'>

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

      <p><label className='mr1' htmlFor="isAlive">Is alive? </label>
        <select 
        required
        name="isAlive"  id="isAlive" defaultValue="Yes" 
        onChange={(e) => setIsAlive(e.target.value)}>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select></p>


      <button onClick={postAuthorData} type='submit' className='btn mt1'>Add Author</button>
    </form>

  </section>
  )
}
