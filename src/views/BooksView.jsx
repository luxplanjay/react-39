import { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import * as bookShelfAPI from '../services/bookshelf-api';
import { PageHeading } from 'components/PageHeading/PageHeading';

export const BooksView = () => {
  const { url } = useRouteMatch();
  const [books, setBooks] = useState(null);

  useEffect(() => {
    bookShelfAPI.fetchBooks().then(setBooks);
  }, []);

  return (
    <>
      <PageHeading>Книги</PageHeading>
      {books && (
        <ul>
          {books.map(book => (
            <li key={book.id}>
              <Link to={`${url}/${book.id}`}>{book.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
