import './App.css'
import { Routes, Route } from 'react-router-dom';
import Create from './admin/Create'
import Book from './pages/Book';
import Author from './pages/Author';
import HomePage from './pages/HomePage';
import Navbar from './Navbar';
import Footer from './Footer';

function App() {

  return (
    <>

      <Navbar />
      <Routes>
        {/* Pages */}
        <Route path="/" element={<HomePage />} />
        <Route path="/book" element={<Book />} />
        <Route path="/author" element={<Author />} />

        {/* Admin */}
        <Route path="/newbook" element={<Create />} />

      </Routes>

      <Footer />
    </>
  )
}

export default App
