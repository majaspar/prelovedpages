import "./App.css";
import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

{
  /* Components */
}
import Navbar from "./Navbar";
import Footer from "./Footer";

{
  /* Admin */
}
import AdminDashboard from "./admin/AdminDashboard";
import NewBook from "./admin/book/NewBook";
import NewAuthor from "./admin/author/NewAuthor";
import UpdateAuthor from "./admin/author/UpdateAuthor";
import NewAvailableCopy from "./admin/availableCopy/NewAvailableCopy";
import AuthorsList from "./admin/author/AuthorsList";
import UsersList from "./admin/user/UsersList";
import BookModelsList from "./admin/book/BookModelsList";
import UpdateBookModel from "./admin/book/UpdateBookModel";
import AvailableCopiesList from "./admin/availableCopy/AvailableCopiesList";
import UpdateAvailableCopy from "./admin/availableCopy/UpdateAvailableCopy";
import Styles from "./admin/Styles";

{
  /* Pages */
}
import BookModelPage from "./pages/BookModelPage";
import FourOhFour from "./pages/FourOhFour";
import HomePage from "./pages/homepage/HomePage";
import AllAuthors from "./pages/AllAuthors";
import AuthorPage from "./pages/AuthorPage";
import AllAvailableBooks from "./pages/AllAvailableBooks";
import GenrePage from "./pages/GenrePage";
import GenreItemPage from "./pages/GenreItemPage";
import LatestBooksPage from "./pages/LatestBooksPage";

export default function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <main className="mt-16 mb-8">
        <Routes>
          {/* Pages */}
          <Route path="/" element={<HomePage />} />
          <Route path="/books/:id" element={<BookModelPage />} />
          <Route path="/authors/:id" element={<AuthorPage />} />
          <Route path="/authors" element={<AllAuthors />} />
          <Route path="/books" element={<AllAvailableBooks />} />
          <Route path="/latest" element={<LatestBooksPage />} />
          <Route path="*" element={<FourOhFour />} />

          {/* Genre */}
          <Route path="/genre" element={<GenrePage />} />
          <Route path="/genre/:genre" element={<GenreItemPage />} />

          {/* Admin */}

          <Route path="/admin" element={<AdminDashboard />} />

          {/* Author */}
          <Route path="/admin/authorslist" element={<AuthorsList />} />
          <Route path="/admin/newauthor" element={<NewAuthor />} />
          <Route path="/admin/authors/:id/update" element={<UpdateAuthor />} />

          {/* BookModel */}
          <Route path="/admin/bookmodelslist" element={<BookModelsList />} />
          <Route path="/admin/books/:id/update" element={<UpdateBookModel />} />
          <Route path="/admin/books/:authorid/addbook" element={<NewBook />} />

          {/* Available Copy */}
          <Route
            path="/admin/books/:id/addcopy"
            element={<NewAvailableCopy />}
          />
          <Route
            path="/admin/availablecopieslist"
            element={<AvailableCopiesList />}
          />
          <Route
            path="/admin/copies/:id/update"
            element={<UpdateAvailableCopy />}
          />

          {/* Users */}
          <Route path="/admin/userslist" element={<UsersList />} />

          <Route path="/stylespage" element={<Styles />} />
        </Routes>
      </main>
      <ReactQueryDevtools initialIsOpen={false} />
      <Footer />
    </QueryClientProvider>
  );
}
