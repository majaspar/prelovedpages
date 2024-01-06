import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000",
});

// BookModel
export async function fetchBookModelsData() {
  return api
    .get("/api/books")
    .then((response) => response.data)
    .catch((error) => console.error("Error fetching book models data:", error));
}

export async function fetchBookModelData(id) {
  return api
    .get(`/api/books/${id}`)
    .then((response) => response.data)
    .catch((error) => console.error("Error fetching book model data:", error));
}

export async function getAuthorsData() {
  return await api
    .get("/api/authors")
    .then((response) => response.data)
    .catch((error) => console.error("Error fetching author data:", error));
}

// export async function createBookModel(authorid) {
//   return api
//     .post(`/api/books/${authorid}/addbook`, authorid)
//     .then(console.log("success sis!"))
//     .then(navigate("/admin/bookmodelslist"));
// }

export async function createBookModel(newBookModel) {
  return api.post(`/api/books/${authorid}/addbook`, newBookModel)
}


export async function updateBookModel(updatedBookModel) {
  return await api
    .patch(`/api/books/${id}/update`, updatedBookModel)
    .catch((error) =>
      console.error("Error while updating a book model:", error)
    );
}

export async function deleteBookModel(id) {
  return api
    .delete(`/api/books/${id}/delete`)
    .then((res) => console.log(res))
    .catch((error) => console.error("Error deleting book data:", error));
}

export default api;
