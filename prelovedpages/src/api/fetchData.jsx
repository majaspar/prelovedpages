import api from 'axios'

// Author
export async function getAuthorsData() {
  return await api
    .get("/api/authors")
    .then((response) => response.data)
    .catch((error) => console.error("Error fetching authors data:", error));
}

export async function getAuthorData(id) {
  return await api
    .get(`/api/authors/${id}`)
    .then((response) => response.data)
    .catch((error) => console.error("Error fetching author data:", error));
}

export async function createAuthor(newAuthor) {
  return api.post(`/api/authors/add`, newAuthor)
  .then((response) => response.data)
  .catch((error) => console.error("Error fetching author data:", error));
}

export async function updateAuthor(updatedAuthor) {
  return await api
    .patch(`/api/authors/${id}/update`, updatedAuthor)
    .catch((error) =>
      console.error("Error while updating a book model:", error)
    );
}

export async function deleteAuthor(id) {
  return api
    .delete(`/api/authors/${id}/delete`, id)
    .then((res) => console.log(res))
    .catch((error) => console.error("Error deleting book data:", error));
}


// Available Copies
export async function getCopiesData() {
  return await api
    .get("/api/copies")
    .then((response) => response.data)
    .catch((error) => console.error("Error fetching authors data:", error));
}

// export async function getAuthorData(id) {
//   return await api
//     .get(`/api/authors/${id}`)
//     .then((response) => response.data)
//     .catch((error) => console.error("Error fetching author data:", error));
// }

export async function createCopy(newCopy) {
  return api.post(`/api/copies/:id/addcopy`, newCopy)
  .then((response) => response.data)
  .then(console.log(response.data))
  .catch((error) => console.error("Error creating new copy:", error));
}

// export async function updateAuthor(updatedAuthor) {
//   return await api
//     .patch(`/api/authors/${id}/update`, updatedAuthor)
//     .catch((error) =>
//       console.error("Error while updating a book model:", error)
//     );
// }

// export async function deleteAuthor(id) {
//   return api
//     .delete(`/api/authors/${id}/delete`, id)
//     .then((res) => console.log(res))
//     .catch((error) => console.error("Error deleting book data:", error));
// }


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

export async function createBookModel(newBookModel) {
  return api.post(`/api/books/${authorid}/addbook`, newBookModel)
  .then((response) => response.data)
  .catch((error) => console.error("Error fetching author data:", error));
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
    .delete(`/api/books/${id}/delete`, id)
    .then((res) => console.log(res))
    .catch((error) => console.error("Error deleting book data:", error));
}
