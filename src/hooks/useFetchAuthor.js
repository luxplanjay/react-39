import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as bookShelfAPI from 'services/bookshelf-api';

export const useFetchAuthor = () => {
  const { authorId } = useParams();
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    bookShelfAPI.fetchAuthorById(authorId).then(setAuthor);
  }, [authorId]);

  return author;
};
