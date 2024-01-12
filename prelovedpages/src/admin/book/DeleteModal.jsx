import "../Admin.css";
import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { Modal, Fade, Backdrop } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Loading from "../../components/Loading";
import api from "axios";

export default function DeleteModal({ id, author }) {
  const navigate = useNavigate();
  const [authorid, setAuthorid] = useState("");
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const handleOpen = () => {
    setOpenDeleteModal(true);
    setAuthorid(author);
  };
  const handleClose = () => setOpenDeleteModal(false);

  const handleDelete = async (id) => {
    return api
      .delete(`/api/books/${authorid}/${id}/delete`, id)
      .then((res) => console.log(res))
      .catch((error) => console.error("Error deleting book data:", error))
      .then(handleClose());
  };
  const queryClient = useQueryClient();
  const { mutateAsync, isLoading } = useMutation({
    mutationFn: handleDelete,
    onSuccess: () => {
      queryClient.invalidateQueries("bookmodels");
    },
  });

  const remove = async () => {
    await mutateAsync(id);
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
            <h4 className="center mb2">
              Are you sure You want to delete Book Model {id} by author id
              <input
                type="text"
                name="authorid"
                id="authorid"
                value={authorid}
                onChange={(e) => setAuthorid(e.target.value)}
              />
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
