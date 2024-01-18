import "../Admin.css";
import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { Modal, Fade, Backdrop } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Loading from "../../components/Loading";
import { deleteAuthor } from "../../api/fetchData";

export default function DeleteAuthor({ id }) {
  const navigate = useNavigate();
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const handleOpen = () => setOpenDeleteModal(true);
  const handleClose = () => setOpenDeleteModal(false);

  const handleDelete = async (id) => {
    deleteAuthor(id);
    handleClose();
  };
  const queryClient = useQueryClient();
  const { mutateAsync, isLoading } = useMutation({
    mutationFn: handleDelete,
    onSuccess: () => {
      queryClient.invalidateQueries("authors");
    },
  });

  const remove = async () => {
    await mutateAsync(id);
    queryClient.invalidateQueries("authors");
  };

  return (
    <>
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
          <div className="DeleteModal center">
            <h4 className="center mb-8">
              Are you sure You want to delete this Book Model?
            </h4>

            <button
              className="mr1 btn DeleteModal__button"
              onClick={handleClose}
            >
              Cancel
            </button>
            <button className="btn danger DeleteModal__button" onClick={remove}>
              {isLoading ? <Loading /> : "Remove"}
            </button>
          </div>
        </Fade>
      </Modal>
    </>
  );
}
