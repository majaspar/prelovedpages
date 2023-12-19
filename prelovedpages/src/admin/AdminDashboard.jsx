import React from 'react'
import { Link } from 'react-router-dom'
import './Admin.css'
import SectionTitle from '../components/SectionTitle'

export default function AdminDashboard() {
    return (<>
        <SectionTitle title="Admin Dashboard" link="/admin" btn="Go to Admin Dashboard" />
        <section className='mt2 margins'>
            <h1 className='mt2'></h1>
            <Link to='/admin/authorslist'><p className='mb1'>List of Authors</p></Link>
            <Link to='/admin/bookmodelslist'><p className='mb1'>List of Book Models</p></Link>
            <Link to='/admin/availablecopieslist'><p className='mb1'>List of Available Copies</p></Link>
            <Link to='/admin/userslist'><p className='mb1'>List of Users</p></Link>




            {/*          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/authorslist" element={<AuthorsList />} />
          <Route path="/admin/bookmodelslist" element={<BookModelsList />} />
          <Route path="/admin/availablecopieslist" element={<AvailableCopiesList />} />
           */}

        </section></>
    )
}
