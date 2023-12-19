import React, { useState, useEffect } from 'react'
import SectionTitle from '../components/SectionTitle'
import axios from 'axios'

import { DataGrid } from '@mui/x-data-grid';

export default function AuthorsList() {

    const [authors, setAuthors] = useState([])

    const getAuthorsData = async () => {
        await axios.get('/api/authors').then((response) => {
            setAuthors(response.data);
        });
    }
    useEffect(() => {
        getAuthorsData()
    }, []);

    const rows = []

    const columns = [
        { field: '_id', headerName: 'ID', width: 230 },
        { field: 'firstName', headerName: 'First name', width: 150 },
        { field: 'lastName', headerName: 'Last name', width: 150 },
        { field: 'originalLanguage', headerName: 'Language', width: 100 },
        { field: 'country', headerName: 'Country', width: 100 },
        { field: 'availableCopies', headerName: 'Copies', width: 150 },
    ];


    return (
        <>
            <SectionTitle title="List of Authors" link="/admin" btn="Go to Admin Dashboard" />
            <section className='margins'>

                <DataGrid
                    getRowId={(row) => row._id}
                    rows={authors}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 25 },
                        },
                    }}
                    pageSizeOptions={[25, 50, 100]}
                    checkboxSelection
                />

            </section>

        </>
    )
}
