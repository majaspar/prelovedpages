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
  .catch((error) => console.error("Error creating author: ", error));
}

export async function updateAuthor(updatedCopy) {
  return await api
    .patch(`/api/authors/${id}/update`, updatedCopy)
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
    .catch((error) => console.error("Error fetching copies data:", error));
}

export async function getCopyData(id) {
  return await api
    .get(`/api/copies/${id}`)
    .then((response) => response.data)
    .catch((error) => console.error("Error fetching copy data:", error));
}

export async function createCopy({newCopy, id}) {
  return api.post(`/api/copies/${id}/addcopy`, newCopy)
  .then((response) => response.data)
  .then(console.log(response.data))
  .catch((error) => console.error("Error creating new copy:", error));
}

export async function updateCopy(updatedCopy) {
  return await api
    .patch(`/api/copies/${id}/update`, updatedCopy)
    .then((res) => console.log(res))
    .catch((error) =>
      console.error("Error while updating an available copy:", error)
    );
}

export async function deleteCopy(id) {
  return api
    .delete(`/api/copies/${id}/delete`, id)
    .then((res) => console.log(res))
    .catch((error) => console.error("Error deleting book data:", error));
}


// BookModel
export async function fetchBookModelsData() {
  return api
    .get("/api/books")
    .then((response) => response.data)
    .catch((error) => console.error("Error fetching book models data:", error));
}

export async function fetchBookModelData(id) {
  return api
    .get(`/api/books/book/${id}`)
    .then((response) => response.data)
    .catch((error) => console.error("Error fetching book model data:", error));
}

export async function createBookModel(newBookModel) {
  return api.post(`/api/books/${authorid}/addbook`, newBookModel)
  .then((response) => response.data)
  .catch((error) => console.error("Error fetching author data:", error));
}

//Latest Page
export async function fetchLatestBooks() {
  return api
    .get("/api/books/latest")
    .then((response) => response.data)
    .catch((error) => console.error("Error fetching book models data:", error));
}

//Latest Component
export async function fetchLatestBooksComponent() {
  return api
    .get("/api/books/latestcomponent")
    .then((response) => response.data)
    .catch((error) => console.error("Error fetching book models data:", error));
}

// Genre
export async function fetchAllGenre(genre) {
  return api
    .get(`/api/books/genre/all/${genre}`)
    .then((response) => response.data)
    .catch((error) => console.error("Error fetching all genre books:", error));
}
