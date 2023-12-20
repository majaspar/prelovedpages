import React, { useState } from 'react'
import { Box, Fab } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import CheckIcon from '@mui/icons-material/Check'
import CircularProgress from '@mui/material'


export default function AuthorActions({ params, rowId, setRowId }) {

    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)

    const handleSubmit = async () => {

    }
    return (
        <div>

            {success ? (
                <Box>
                    <Fab color='primary' sx={{ width: 40, height: 40 }}>
                        <CheckIcon />
                    </Fab>
                </Box>
            ) : (
                <Box>
                    <Fab color='primary' sx={{ width: 40, height: 40 }} disabled={params.id !== rowId || loading} onClick={handleSubmit}>
                        <EditIcon />
                    </Fab>
                </Box>
            )}
            {loading && (
                <CircularProgress size={52}/>
            )}

        </div>
    )
}
