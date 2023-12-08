import './App.css'
import { Routes, Route } from 'react-router-dom';
import Create from './admin/Create'
import Book from './pages/Book';
import Author from './pages/Author';
import HomePage from './pages/HomePage';
import Navbar from './Navbar';
import Footer from './Footer';
import Styles from './admin/Styles';

function App() {

  return (
    <>

      <Navbar />
      <main className='mt4 mb2'>
      <Routes>

        {/* Pages */}
        <Route path="/" element={<HomePage />} />
        <Route path="/book" element={<Book />} />
        <Route path="/author" element={<Author />} />

        {/* Admin */}
        <Route path="/newbook" element={<Create />} />
        <Route path="/stylespage" element={<Styles />} />

      </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
