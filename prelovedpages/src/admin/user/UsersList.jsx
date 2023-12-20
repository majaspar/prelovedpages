import React from 'react'
import SectionTitle from '../../components/SectionTitle'


export default function UsersList() {
  return (
    <>
      <SectionTitle title="List of Users" link="/admin" btn="Go to Admin Dashboard" />
      <section className='margins'>UsersList</section>

    </>
  )
}
