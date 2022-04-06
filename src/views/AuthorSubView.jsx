import { Link } from 'react-router-dom';
import { useFetchAuthor } from 'hooks/useFetchAuthor';

export const AuthorSubView = () => {
  const author = useFetchAuthor();
  return (
    <>
      {!author && <h2>Загружаем...</h2>}
      {author && (
        <>
          <h2>{author.name}</h2>
          <ul>
            {author.books.map(book => (
              <li key={book.id}>
                <Link to={`/books/${book.id}`}>{book.title}</Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};
