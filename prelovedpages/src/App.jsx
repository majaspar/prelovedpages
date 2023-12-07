import './App.css'
import { Routes, Route } from 'react-router-dom';
import Create from './admin/Create'
import Book from './pages/Book';
import Author from './pages/Author';
import HomePage from './pages/HomePage';

function App() {

  return (
    <>
      
        <Routes>
          {/* Pages */}
          <Route path="/" element={<HomePage/>} />
          <Route path="/book" element={<Book/>} />
          <Route path="/author" element={<Author/>} />

          {/* Admin */}
          <Route path="/newbook" element={<Create />} />

        </Routes>
     
    </>
  )
}

export default App
