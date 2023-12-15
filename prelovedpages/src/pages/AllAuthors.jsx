import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import SectionTitle from '../components/SectionTitle'

export default function AllAuthors() {

    const [authors, setAuthors] = useState([])

    const getAuthorsData = async () => {
        await axios.get('/api/authors').then((response) => {
            setAuthors(response.data);
        });
    }
    useEffect(() => {
        getAuthorsData()
    }, []);


    return (<>
        <SectionTitle title="List of Authors" link="/allbooks" btn="See All Books" />

        <section className='margins mt2'>

            <ul>
                {authors.map(author => {
                    return (
                        <li key={author._id}><Link to={`/allauthors/${author._id}`}>
                            {author.firstName} {author.lastName}
                        </Link></li>
                    )
                })}
            </ul>



        </section></>
    )
}
