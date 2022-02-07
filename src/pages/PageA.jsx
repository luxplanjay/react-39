import { useEffect } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';

export const PageA = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    if (query) {
      console.log('Make request');
    }
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: e.currentTarget.elements.query.value });
  };

  return (
    <div>
      <Link to="/page-b" state={{ from: location }}>
        To page B
      </Link>
      <hr />
      <form onSubmit={handleSubmit} autoComplete="off">
        <input type="text" name="query" />
        <button type="submit">Set query</button>
      </form>
    </div>
  );
};
