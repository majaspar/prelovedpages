import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from "react-router-dom"
import SectionTitle from '../components/SectionTitle'

export default function AuthorPage(props) {
    const { id } = useParams()
    const [author, setAuthor] = useState({});

    useEffect(() => {
        axios.get(`/api/authors/${id}`)
            .then((response) => {
                setAuthor(response.data);
            });
    }, []);


    return (<>
    <SectionTitle title={`${author.firstName} ${author.lastName}`} link="/allauthors" btn="Go Back" />

        <section className='margins mt2'>
            <h3 className='mt1'>Available books by this author:</h3>
            <ul>
                <li className='ml1 mt1'>Book 1</li>
                <li className='ml1 mt1'>Book 2</li>
                <li className='ml1 mt1'>Book 3</li>
            </ul>



        </section>
    </>
    )
}