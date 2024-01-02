import axios from 'axios'


export async function fetchBookModelsData() {
    return axios.get('/api/books')
      .then((res) => res.data)
      .catch((error) => console.error("Error fetching book data:", error))

  }

  export async function fetchBookModelData(id){
    return axios.get(`/api/books/${id}`)
      .then((res) => res.data)
      .catch((error) => console.error("Error fetching book data:", error))
  }
