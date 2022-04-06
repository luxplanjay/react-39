import { Routes, Route } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';
import { HomeView } from 'views/HomeView';
import { AuthorsView } from 'views/AuthorsView';
import { AuthorSubView } from 'views/AuthorSubView';
import { BooksView } from 'views/BooksView';
import { BookDetailsView } from 'views/BookDetailsView';
import { NotFoundView } from 'views/NotFoundView';

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
