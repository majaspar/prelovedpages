import { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom"
import axios from 'axios'
import Loading from '../components/Loading';

//import { useNavigate } from "react-router";

export default function BookModelPage() {

    const { id } = useParams()

    const [book, setBook] = useState({});

    useEffect(() => {
        async function getData() {
            try {
                const response = await axios.get(`/api/books/${id}`);
                setBook(response.data);
            } catch (error) {
                console.error("Error fetching book data:", error);
            }
        }
        getData();
    }, [id]); // Include id as a dependency

    console.log(book.author)
    return (
        <section className='BookModelPage flex mt2 margins'>

            <div className=''><img src={book.cover} alt="" /></div>

            {book.author ? (

                <div className=''>
                    <h2 className=''>{book.title}</h2>
                    <Link to={`/allauthors/${book.author._id}`}><h4>{book.author.firstName} {book.author.lastName}</h4></Link>
                    <hr/>
                    <p className='mb1'>Publication date: {book.publishedYear}</p>
                    
                    <p className='mb1'>{book.isPartOfSeries ? <span>{book.series}, book {book.volume}</span> : 'A standalone novel'}</p>
                    <p className='mb1'>Genre: {book.genre.join(', ')}</p>
                    <p className='mb1'>{book.synopsis}</p>
                    <p className='mb1'>{book.isAvailable ? <span>{book.availableCopies}</span> : <span>There are no copies available at the moment.</span>}</p>
                </div>

            ) : (
                <Loading />
            )}


        </section>
    )
}
