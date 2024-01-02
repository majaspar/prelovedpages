import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useMutation, useQuery } from '@tanstack/react-query'
import axios from 'axios'
import EditIcon from '@mui/icons-material/Edit'
import DeleteModal from './DeleteModal'
import SectionTitle from '../../components/SectionTitle'
import Loading from '../../components/Loading'
import Error from '../../components/Error'
import { fetchBookModelsData } from '../../api/fetchData'

export default function BookModelsList() {

  const { data: bookModels, isLoading, isError } = useQuery({
    queryKey: ["bookmodels"],
    queryFn: () => fetchBookModelsData()
  })

  if (isError) {
    return <div className='mt2 margins'><Error message={isError.message} /></div>
  }

  if (isLoading) {
    return <div className='mt2 margins'><Loading /></div>
  }
  return (
    <>
      <SectionTitle title="List of Book Models" link="/admin" btn="Go to Admin Dashboard" />
      <section className='BookModelsList table__wrapper margins'>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Year</th>
              <th>synopsis</th>
              <th>cover link</th>
              <th>is series?</th>
              <th>series title</th>
              <th>vol</th>
              <th>genre</th>
              <th>is available?</th>
              <th>is featured?</th>
              <th>Mongo Id</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {bookModels?.map((book) => {
              return <tr key={book._id}>
                <td className='BookModelsList__td--title'><Link to={`/books/${book._id}`}>{book.title}</Link></td>
                <td><Link to={`/authors/${book.author._id}`}>{book.author.firstName} {book.author.lastName}</Link></td>
                <td className='center'>{book.publishedYear}</td>
                <td className='BookModelsList__td--synopsis'><p>{book.synopsis}</p></td>
                <td className='BookModelsList__td--cover'><p>{book.cover}</p></td>
                <td className='center'>{book.isPartOfSeries ? "Yes" : "No"}</td>
                <td>{!book.series ? "-" : book.series}</td>
                <td className='center'>{!book.volume ? "-" : book.volume}</td>
                <td>{book.genre.join(', ')}</td>
                <td className='center'>{book.isAvailable ? "Yes" : "No"}</td>
                <td className='center'>{book.isFeatured ? "Yes" : "No"}</td>
                <td className='center'>{book._id}</td>
                <td className='BookModelsList__td--edit center'>
                  <Link to={`/books/${book._id}/update`}>
                    <EditIcon />
                  </Link>
                </td>
                <td className='BookModelsList__td--delete center'> <DeleteModal id={book._id} /></td>

              </tr>
            })}
          </tbody>
        </table>

      </section>

    </>
  )
}