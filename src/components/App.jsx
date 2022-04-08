import { Routes, Route } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';
import { createAsyncView } from 'helpers';

const HomeView = createAsyncView('HomeView');
const AuthorsView = createAsyncView('AuthorsView');
const AuthorSubView = createAsyncView('AuthorSubView');
const BooksView = createAsyncView('BooksView');
const BookDetailsView = createAsyncView('BookDetailsView');
const NotFoundView = createAsyncView('NotFoundView');

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomeView />} />
        <Route path="authors" element={<AuthorsView />}>
          <Route path=":authorId" element={<AuthorSubView />} />
        </Route>
        <Route path="books" element={<BooksView />} />
        <Route path="books/:bookId" element={<BookDetailsView />} />
        <Route path="*" element={<NotFoundView />} />
      </Route>
    </Routes>
  );
};
