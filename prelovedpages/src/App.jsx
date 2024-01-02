import './App.css'
import { Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

{/* Components */ }
import Navbar from './Navbar';
import Footer from './Footer';

{/* Admin */ }
import AdminDashboard from './admin/AdminDashboard'
import NewBook from './admin/BookModel/NewBook';
import NewAuthor from './admin/author/NewAuthor'
import UpdateAuthor from './admin/author/UpdateAuthor';
import NewAvailableCopy from './admin/availableCopy/NewAvailableCopy'
import AuthorsList from './admin/author/AuthorsList';
import UsersList from './admin/user/UsersList';
import BookModelsList from './admin/BookModel/BookModelsList';
import UpdateBookModel from './admin/bookModel/UpdateBookModel';
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
          <Route path="/authors/:id" element={<AuthorPage />} />
          <Route path="/authors" element={<AllAuthors />} />
          <Route path="/allbooks" element={<AllAvailableBooks />} />
          <Route path="/genre" element={<Categories />} />

          <Route path="*" element={<FourOhFour />} />

          {/* Admin */}

          <Route path="/admin" element={<AdminDashboard />} />

          {/* Author */}
          <Route path="/admin/authorslist" element={<AuthorsList />} />
          <Route path="/admin/newauthor" element={<NewAuthor />} />
          <Route path="/authors/:id/update" element={<UpdateAuthor />} />
           {/* BookModel */}
          <Route path="/admin/bookmodelslist" element={<BookModelsList />} />
          <Route path="/books/:id/update" element={<UpdateBookModel />} />
          <Route path="/authors/:authorid/addbook" element={<NewBook />} />
           {/* Available Copy */}
          <Route path="/admin/newavailablecopy" element={<NewAvailableCopy />} />
          <Route path="/admin/availablecopieslist" element={<AvailableCopiesList />} />
           {/* Users */}
          <Route path="/admin/userslist" element={<UsersList />} />

          <Route path="/stylespage" element={<Styles />} />

        </Routes>
      </main>
      <ReactQueryDevtools initialIsOpen={false} />
      <Footer />
    </QueryClientProvider>
  )
}

export default App
