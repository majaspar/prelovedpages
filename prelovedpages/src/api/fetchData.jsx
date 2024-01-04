import axios from "axios";
import { useParams } from "react-router-dom";


// BookModel
export async function fetchBookModelsData() {
  return axios
    .get("/api/books")
    .then((response) => response.data)
    .catch((error) => console.error("Error fetching book models data:", error));
}

export async function fetchBookModelData(id) {
  return axios
    .get(`/api/books/${id}`)
    .then((response) => response.data)
    .catch((error) => console.error("Error fetching book model data:", error));
}

export async function getAuthorsData() {
  return await axios
    .get("/api/authors")
    .then((response) => response.data)
    .catch((error) => console.error("Error fetching author data:", error));
}

export async function createBookModel(authorid) {
  return axios
    .post(`/api/books/${authorid}/addbook`, authorid)
    .then(console.log("success sis!"))
    .then(navigate("/admin/bookmodelslist"));
}

export async function updateBookModel(updatedBookModel) {
  return await axios
    .put(`/api/books/${id}/update`, updatedBookModel)
    .then((response) => response.data)
    .catch((error) =>
      console.error("Error while updating a book model:", error)
    );
}
