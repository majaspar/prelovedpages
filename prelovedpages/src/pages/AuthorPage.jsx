import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useParams } from "react-router-dom"
import SectionTitle from '../components/SectionTitle'
import NewBook from '../admin/NewBook'

export default function AuthorPage(props) {
    const { id } = useParams()
    const [author, setAuthor] = useState({});
    const [addBook, openAddBook] = useState(false)

    let checkState = addBook ? 'show' : ''
    const showNewBookForm = () => {
        openAddBook(!addBook)
    }


    useEffect(() => {
        axios.get(`/api/authors/${id}`)
            .then((response) => {
                setAuthor(response.data);
            });
    }, []);

    return (<>
        <SectionTitle title={`${author.firstName} ${author.lastName}`} link="/allauthors" btn="Go Back" />

        <section className='AuthorPage margins mt2'>
            <h3 className='mt1'>Available books by this author:</h3>
            <ul>
                <li className='ml1 mt1'>Book 1</li>
                <li className='ml1 mt1'>Book 2</li>
                <li className='ml1 mt1'>Book 3</li>
            </ul>

            <button onClick={showNewBookForm} className="mt4 mb2 btn">Add new book</button>
            <div className={`new-book-form ${checkState}`}>
                <NewBook authorid={id}/>
            </div>
        </section>
    </>
    )
}