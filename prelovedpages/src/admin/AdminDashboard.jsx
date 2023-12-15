import React from 'react'
import { Link } from 'react-router-dom'
import './Admin.css'

export default function AdminDashboard() {
    return (
        <div className='mt2 margins'>
            <h1 className='mt2'>Admin Dashboard</h1>

            <Link to='/allauthors'><p className='mb1'>All Authors &rarr; New Book Model</p></Link>
            <Link to='/newauthor'><p className='mb1'>New Author</p></Link>
            <Link to='/newauthor'><p className='mb1'>New Author</p></Link>
            <Link to='/newauthor'><p className='mb1'>New Author</p></Link>
            <Link to='/newauthor'><p className='mb1'>New Author</p></Link>
            <Link to='/newauthor'><p className='mb1'>New Author</p></Link>
            <Link to='/newauthor'><p className='mb1'>New Author</p></Link>
            <Link to='/newauthor'><p className='mb1'>New Author</p></Link>




        </div>
    )
}
