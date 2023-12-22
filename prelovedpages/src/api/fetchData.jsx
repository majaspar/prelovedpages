export default fetchBookModelsData = async () => {
    return axios.get('/api/books')
      .then((res) => res.data)
      .catch((error) => console.error("Error fetching book data:", error))
  }