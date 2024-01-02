import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import SectionTitle from '../../components/SectionTitle'
import axios from 'axios'
import DeleteModal from '../BookModel/DeleteModal';
import NewBook from '../BookModel/NewBook';
import EditIcon from '@mui/icons-material/Edit';

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
              <th>First Name</th>
              <th>Last Name</th>
              <th>Born</th>
              <th>Country</th>
              <th>Book Models</th>  
              <th>Available Copies</th>   
              <th>Photo</th>   
              <th>Photo source</th>  
              <th>Id</th>      
              <th>Edit</th>      
              <th>Add Book</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {authors?.map((author) => {
              return <tr key={author._id}>
                <td><Link to={`/authors/${author._id}`}>{author.firstName}</Link></td>
                <td><Link to={`/authors/${author._id}`}>{author.lastName}</Link></td>
                <td className='center'>{author.born}</td>
                <td className='center'>{author.country}</td>
                <td><p><ol>{author.writtenBooks.map((book) => {
                    return <li>{book.title}</li>
                } )}</ol></p></td>
                <td><p>{author.availableCopies}</p></td>
                <td><p className='td-scroll'>{author.photo}</p></td>
                <td><p>{author.photoSource}</p></td>
                <td>{author._id}</td>
                <td>
                  <Link to={`/authors/${author._id}/update`}>
                    <EditIcon/>
                    </Link>
                </td>
                <td>
                  <Link to='/admin/newbook' authorid={author._id} >
                   add
                    </Link>
                </td>
                <td className='BookModelsList__td--delete center'> <DeleteModal id={author._id}/></td>

              </tr>
            })}
          </tbody>
        </table>

      </section>

        </>
    )
}
