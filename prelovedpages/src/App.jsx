import './App.css'
import { Routes, Route } from 'react-router-dom';
import NewBook from './admin/NewBook'
import NewAuthor from './admin/NewAuthor'
import Book from './pages/Book';
import FourOhFour from './pages/FourOhFour';
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

        <Route path="*" element={<FourOhFour />} />

        {/* Admin */}
        <Route path="/newbook" element={<NewBook />} />
        <Route path="/newauthor" element={<NewAuthor />} />
        <Route path="/stylespage" element={<Styles />} />

      </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
