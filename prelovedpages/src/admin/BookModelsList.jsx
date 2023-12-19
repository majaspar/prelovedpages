import React from 'react'
import { useMutation, useQuery } from '@tanstack/react-query'
import SectionTitle from '../components/SectionTitle'
import Loading from '../components/Loading'
import axios from 'axios'

export default function BookModelsList() {

  const fetchBookModelsData = async () => {
    return axios.get('/api/books')
      .then((res) => res.data)
  }

  const { data:bookModels, isLoading , isError} = useQuery({
    queryFn: () => fetchBookModelsData(),
    queryKey: ["bookModels"],
  })

    // const { mutateAsync:addBook } = useMutation({
    //   mutation: addBook,
    // })

  if (isError) {
    return <div className='mt2 margins'><Error message="error"/></div>
  }

  if (isLoading) {
    return <div className='mt2 margins'><Loading /></div>
  }

  return (
    <>
      <SectionTitle title="List of Book Models" link="/admin" btn="Go to Admin Dashboard" />
      <section className='margins'>List of Book Models
        <div>
          {bookModels?.map((book) => {
            return <p key={book._id}>{book.title}</p>})}

        </div>

      </section>

    </>
  )
}

// {bookModels ?
//   <p>{bookModels.map(book => book.title)}</p> :
//   <p><Loading/></p>}