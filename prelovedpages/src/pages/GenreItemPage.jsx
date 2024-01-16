import React from 'react'
import SectionTitle from '../components/SectionTitle'
import { Link, useParams } from 'react-router-dom'
import { useQuery } from "@tanstack/react-query";
import { fetchAllGenre } from "../api/fetchData";
import Loading from "../components/Loading";
import Error from "../components/Error";

export default function GenreItemPage() {

    const { genre } = useParams()

    const {
        data: genreItemData,
        isLoading,
        isError,
      } = useQuery({
        queryKey: [genre],
        queryFn: () => fetchAllGenre(genre),
      });


      if (isLoading) {
        return <Loading />;
      }
    
      if (isError) {
        return <Error message={isError.message} />;
      }
      
  return (
    <>
    <SectionTitle title={genre} btn='See all Genre' link='/genre'/>
    <section className="margins mt2">

    {genreItemData?.map((book) => {
        return (
           <span>
            <Link to={`/books/${book._id}`}><img src={book.cover} height="150" alt={book.title} /></Link>
            </span> 
        )
    })}


    </section>
    </>
  )
}
