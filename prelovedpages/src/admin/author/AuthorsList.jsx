import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import SectionTitle from '../../components/SectionTitle'
import axios from 'axios'
import DeleteModal from '../BookModel/DeleteModal';

export default function AuthorsList() {

    const [authors, setAuthors] = useState([])

    const getAuthorsData = async () => {
        await axios.get('/api/authors').then((response) => {
            setAuthors(response.data);
        });
    }
    useEffect(() => {
        getAuthorsData()
    }, []);

    return (
        <>
            <SectionTitle title="List of Authors" link="/admin" btn="Go to Admin Dashboard" />
            <section className='BookModelsList table__wrapper margins'>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Born</th>
              <th>Country</th>
              <th>Book Models</th>  
              <th>Available Copies</th>        
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {authors?.map((author) => {
              return <tr key={author._id}>
                <td className='BookModelsList__td--title'>{author._id}</td>
                <td><Link to={`/authors/${author._id}`}>{author.firstName}</Link></td>
                <td><Link to={`/authors/${author._id}`}>{author.lastName}</Link></td>
                <td className='center'>{author.born}</td>
                <td className='center'>{author.country}</td>
                <td><p>{author.writtenBooks.join(', ')}</p></td>
                <td><p>{author.availableCopies}</p></td>
                <td className='BookModelsList__td--edit center'>
                  <Link to={`/authors/${author._id}/edit`}>Edit</Link>
                </td>
                <td className='BookModelsList__td--delete center'> <DeleteModal/></td>

              </tr>
            })}
          </tbody>
        </table>

      </section>

        </>
    )
}
