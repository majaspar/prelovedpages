import '../Admin.css'
import React, { useState } from 'react'

import { useNavigate } from "react-router";
import axios from 'axios'
import { Modal, Fade, Backdrop } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export default function DeleteModal({id}) {

    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const handleOpen = () => setOpenDeleteModal(true);
    const handleClose = () => setOpenDeleteModal(false);

    const navigate = useNavigate();


    const handleDelete = (id) => {
        axios.delete(`/api/books/${id}/delete`)
            .then((res) => console.log(res))
            .catch((error) => console.error("Error deleting book data:", error))
            navigate('/admin/bookmodelslist')
    }

    return (<>
        <DeleteIcon onClick={handleOpen} />
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={openDeleteModal}
            onClose={handleClose}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
                backdrop: {
                    timeout: 500,
                },
            }}
        >
            <Fade in={openDeleteModal}>
                <div className='DeleteModal center'>
                    <h4 className='center mb2'>Are you sure You want to delete this Book Model?</h4>
                     
                    <button className='mr1 btn DeleteModal__button' onClick={handleClose}>Cancel</button> 
                    <button className='btn danger DeleteModal__button' onClick={(e) => handleDelete(id)}>Delete</button>
                </div>
            </Fade>
        </Modal></>
    )
}
