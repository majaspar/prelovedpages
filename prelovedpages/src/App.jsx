import './App.css'
import { Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

{/* Components */ }
import Navbar from './Navbar';
import Footer from './Footer';
{/* Admin */ }
import AdminDashboard from './admin/AdminDashboard'
import NewAuthor from './admin/author/NewAuthor'
import NewAvailableCopy from './admin/availableCopy/NewAvailableCopy'
import AuthorsList from './admin/author/AuthorsList';
import UsersList from './admin/user/UsersList';
import BookModelsList from './admin/bookModel/BookModelsList';
import AvailableCopiesList from './admin/availableCopy/AvailableCopiesList';
import Styles from './admin/Styles';
{/* Pages */ }
import AvailableCopyPage from './pages/AvailableCopyPage';
import BookModelPage from './pages/BookModelPage';
import FourOhFour from './pages/FourOhFour';
import HomePage from './pages/HomePage';
import AllAuthors from './pages/AllAuthors';
import AuthorPage from './pages/AuthorPage';
import AllAvailableBooks from './pages/AllAvailableBooks';
import Categories from './pages/Categories';


function App() {

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>

      <Navbar />
      <main className='mt4 mb2'>
        <Routes>

          {/* Pages */}
          <Route path="/" element={<HomePage />} />
          <Route path="/books/:id" element={<BookModelPage />} />
          <Route path="/copies/:copyid" element={<AvailableCopyPage />} />
          <Route path="/allauthors/:id" element={<AuthorPage />} />
          <Route path="/allauthors" element={<AllAuthors />} />
          <Route path="/allbooks" element={<AllAvailableBooks />} />
          <Route path="/genre" element={<Categories />} />

          <Route path="*" element={<FourOhFour />} />

          {/* Admin */}

          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/authorslist" element={<AuthorsList />} />
          <Route path="/admin/userslist" element={<UsersList />} />
          <Route path="/admin/bookmodelslist" element={<BookModelsList />} />
          <Route path="/admin/availablecopieslist" element={<AvailableCopiesList />} />

{/*        <Route path="/newbook" element={<NewBook />} /> */}
          <Route path="/newauthor" element={<NewAuthor />} />
          <Route path="/newavailablecopy" element={<NewAvailableCopy />} />
          <Route path="/stylespage" element={<Styles />} />

        </Routes>
      </main>
      <Footer />
    </QueryClientProvider>
  )
}

export default App
